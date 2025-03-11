import { useRef, useState } from 'react';
import '../App.css';
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from 'emailjs-com';


type FormInputs = {
    subject: string,
    email: string,
    message: string
}

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();
    const [isSent, setIsSent] = useState<boolean>(false);  // État pour le message de confirmation

    const onSubmit: SubmitHandler<FormInputs> = () => {
        if (!form.current) return; // Vérification si form.current n'est pas null
            
        const serviceID = 'service_8vfdyrl';
        const templateID = 'template_f93ko2l';
        const userID = 'Vzl4mAhs5HVI2xbxn';

        emailjs.sendForm(serviceID, templateID, form.current, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Réinitialiser le formulaire et afficher le message de confirmation
                reset();
                setIsSent(true);
                setTimeout(() => setIsSent(false), 5000);  // Cacher le message après 5 secondes
            }, (err) => {
                console.error('FAILED...', err);
                setIsSent(false);  // En cas d'échec, ne pas afficher le message de succès
            });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-description">
                    Have a question or feedback? <br />
                    Fill out the form below, and we’ll get back to you soon!
                </p>
                {/* Affichage du message de confirmation si le message a été envoyé */}
                <form ref={form} className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("subject")} type="text" className="contact-field" name="subject" id="subject" placeholder="Subject" required />
                    {errors.subject && <span>Ce champ est requis</span>}
                    <input {...register("email")} type="email" className="contact-field" name="email" id="email" placeholder="Your email" required />
                    {errors.email && <span>Ce champ est requis</span>}
                    <textarea {...register("message")} className="contact-textarea" name="message" id="message" placeholder="Your message" rows={6} required></textarea>
                    {errors.message && <span>Ce champ est requis</span>}
                    <button type="submit" className="contact-button">Submit</button>
                    {isSent && <p className="success-message">Your message has been sent successfully!</p>}
                </form>

            </div>
        </div>

    );
};

export default Contact;
