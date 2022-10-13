export const URL_HOST =
    process.env.NODE_ENV === "production"
        ? "https://cors-everywhere-me.herokuapp.com/http://ytcbackend-env.eba-pztxhppp.us-east-2.elasticbeanstalk.com/"
        : "http://127.0.0.1:8000";