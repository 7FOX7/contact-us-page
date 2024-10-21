import nodemailer from 'nodemailer'

const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.com$")

export function isValidEmail(email: string) {
   if(regex.test(email)) {
      return true
   }

   return false 
}

const transporter = nodemailer.createTransport({
   service: 'gmail',
   port: 587, 
   secure: false, 
   auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
   },
});

export async function sendEmail(name: string, to: string) {
   const mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: 'Thank you!',
      html: `
         <p>${name}, this is just a confirmation that we got your request. You will be contacted soon!</p>
      `
   };

   try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
   } catch (error) {
      throw new Error('Error when sending an email: ' + error)
   }
};