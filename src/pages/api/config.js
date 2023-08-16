import Cors from "cors";

// CORS middleware initialization
const cors = Cors({
    origin: '*',
    methods: ['POST', 'GET', 'PATCH', 'DELETE'],
});

// Middleware to manage CORS demand
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
            return reject(result);
        }

        return resolve(result);
      });
    })
}

// API request management with CORS
export default async function handler(req, res) {
    await runMiddleware(req, res, cors);

    
}