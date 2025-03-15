//netlify/functions/submitForm.js

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);
        console.log(name, email, message);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form submitted successfully" })
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Something went wrong" })
        };
    }
}