import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    sendContactEmail: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string().min(1, "Name is required"),
            email: z.string().email("Invalid email address"),
            phone: z.string().optional(),
            subject: z.string().min(1, "Subject is required"),
            message: z.string().min(1, "Message is required"),
        }),
        handler: async (input) => {
            const { name, email, phone, subject, message } = input;

            try {
                const data = await resend.emails.send({
                    from: import.meta.env.MAIL_FROM_ADDRESS || 'AtoZ Business <onboarding@resend.dev>', // Update this with your verified domain or use default testing
                    to: [import.meta.env.MAIL_TO_ADDRESS || 'info@atozbusiness.ae'], // Replace with actual recipient
                    replyTo: email,
                    subject: `New Contact Form Submission: ${subject}`,
                    html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <h3>Message:</h3>
            <p>${message}</p>
          `,
                });

                if (data.error) {
                    throw new ActionError({
                        code: 'BAD_REQUEST',
                        message: data.error.message,
                    });
                }

                return {
                    success: true,
                    data: data.data,
                };
            } catch (error) {
                console.error('Resend Error:', error);
                throw new ActionError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Failed to send email. Please try again later.',
                });
            }
        },
    }),

    sendCostCalculatorEmail: defineAction({
        accept: 'form',
        input: z.object({
            // Step 1: Business Details
            businessActivity: z.string().min(1, "Business activity is required"),
            numberOfOwners: z.string().min(1, "Number of owners is required"),
            premisesType: z.string().min(1, "Premises type is required"),
            numberOfVisas: z.string().min(1, "Number of visas is required"),
            jurisdiction: z.string().min(1, "Jurisdiction is required"),
            // Step 2: Contact Information
            firstName: z.string().min(1, "First name is required"),
            lastName: z.string().min(1, "Last name is required"),
            phone: z.string().min(1, "Phone is required"),
            email: z.string().email("Invalid email address"),
            nationality: z.string().min(1, "Nationality is required"),
        }),
        handler: async (input) => {
            const {
                businessActivity,
                numberOfOwners,
                premisesType,
                numberOfVisas,
                jurisdiction,
                firstName,
                lastName,
                phone,
                email,
                nationality
            } = input;

            try {
                const data = await resend.emails.send({
                    from: import.meta.env.MAIL_FROM_ADDRESS || 'AtoZ Business <onboarding@resend.dev>',
                    to: [import.meta.env.MAIL_TO_ADDRESS || 'info@atozbusiness.ae'],
                    replyTo: email,
                    subject: `New Cost Calculator Request from ${firstName} ${lastName}`,
                    html: `
            <h2>New Cost Calculator Request</h2>
            
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>
            
            <h3>Business Details</h3>
            <p><strong>Business Activity:</strong> ${businessActivity}</p>
            <p><strong>Number of Owners:</strong> ${numberOfOwners}</p>
            <p><strong>Premises Type:</strong> ${premisesType}</p>
            <p><strong>Number of Visas:</strong> ${numberOfVisas}</p>
            <p><strong>Jurisdiction:</strong> ${jurisdiction}</p>
          `,
                });

                if (data.error) {
                    throw new ActionError({
                        code: 'BAD_REQUEST',
                        message: data.error.message,
                    });
                }

                return {
                    success: true,
                    data: data.data,
                };
            } catch (error) {
                console.error('Resend Error:', error);
                throw new ActionError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Failed to send cost calculator request. Please try again later.',
                });
            }
        },
    }),
};
