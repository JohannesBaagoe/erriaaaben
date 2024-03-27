export async function POST(request) {

    try {
        // Parse the request body as JSON
        const body = await request.json();

        // Check if the token is valid
        if (body.token === 'diller') {
            // Write the status to a file
            const fs = require('fs');
            fs.writeFileSync('status.txt', body.status);

            // Return a successful response
            return new Response(JSON.stringify({ message: 'Status written to file' }), {
                headers: { 'Content-Type': 'application/json' },
                status: 200
            });
        } else {
            // Return a forbidden response if the token is invalid
            return new Response(JSON.stringify({ error: 'Forbidden' }), {
                headers: { 'Content-Type': 'application/json' },
                status: 403
            });
        }
    } catch (error) {
        // Log any errors
        console.error('Error parsing JSON:', error);
        
        // Return a bad request response
        return new Response(JSON.stringify({ error: 'Bad Request' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400
        });
    }
}

// pages/api/status.js
export async function GET(req) {
    try {
      if (req.method === 'GET') {
        const fs = require('fs');
        const statusData = fs.readFileSync('status.txt', 'utf-8');

        return new Response(JSON.stringify({ status: statusData }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });        


      } else {
        
        return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 405
        });     

      }
    } catch (error) {

        console.error('Error reading status.txt:', error);

        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });    
    }

  }