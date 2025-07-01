const express = require('express')
const app = express()
const port = 3000
const router = require('./router/route')

// passport authencation requiered files
const session = require('express-session');
const passport = require('passport');
const UserSchema = require('./Model/UserSchema');
const LocalStrategy = require('passport-local').Strategy;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'Herika1212',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

// Passport Local Strategy

passport.use(new LocalStrategy(
    { usernameField: 'name', passwordField: 'pwd' },
    async (name, pwd, done) => {
        try {
            const user = await UserSchema.findOne({ name });
            if (!user) {
                return done(null, false, { message: 'Incorrect Username' });
            }

            if (user.pwd !== pwd) {
                return done(null, false, { message: 'Incorrect Password' });
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));


// Serializer
passport.serializeUser((user, done) => {
    done(null, user.id);
})

// deserializer
passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserSchema.findById(id);
        if (!user) {
            return done(new Error('User not found'));
        }
        done(null, user);
    } catch (error) {
        done(error);
    }
});


app.get('/', (req, res) => res.send('Hello, Lili🫶'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))