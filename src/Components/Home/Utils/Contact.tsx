import React, { useState } from 'react'
import Heading from '../../Utils/Text/Heading'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        institution: '',
        message: ''
    })
    const [status, setStatus] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!formData.fullName || !formData.email || !formData.message) {
            setStatus("Please fill in all required fields.")
            return
        }

        setIsLoading(true)
        setStatus(null)

        try {
            // Replace these with your actual EmailJS credentials
            const serviceID = 'service_h6jcmbu'
            const templateID = 'template_frodyyi'
            const publicKey = '-g3ImqDW58hHOjeaa'

            const templateParams = {
                name: formData.fullName,
                email: formData.email,
                institution: formData.institution,
                description: formData.message,
            }

            await emailjs.send(serviceID, templateID, templateParams, publicKey)
            
            setStatus("Message sent successfully!")
            setFormData({
                fullName: '',
                email: '',
                institution: '',
                message: ''
            })
        } catch (error: any) {
            setStatus("Error sending message: " + error.text || error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#2C3E50] flex items-center justify-center p-8" id='contact'>
            <div className="w-full max-w-2xl space-y-2">

                <Heading heading='Contact Editorial Board' afterColor='#ffffff' textColor='white' class='after:mx-auto text-center mx-auto'>
                </Heading>

                <form className="space-y-2" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-white md:text-base text-sm mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white text-black"
                            placeholder="Enter your full name"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white md:text-base text-sm mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white text-black md:text-base text-sm"
                            placeholder="Enter your email address"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white md:text-base text-sm mb-2">Institution/Affiliation</label>
                        <input
                            type="text"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white text-black md:text-base text-sm"
                            placeholder="Enter your institution or affiliation"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white md:text-base text-sm mb-2">Message</label>
                        <textarea
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border-0 text-black bg-white md:text-base text-sm"
                            placeholder="Enter your message"
                        />
                    </div>
                    
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-[#52B788] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-center font-georgia md:text-base text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
                
                {status && (
                    <div className="text-center mt-4">
                        <p className="text-white md:text-base text-sm">{status}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
