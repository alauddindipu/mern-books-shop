import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="bg-gray dark:bg-gray-900 shadow-xl p-10 m-10 rounded">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input
                                type="email"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full " />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full " />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="input input-bordered input-accent w-full h-full"></textarea>
                        </div>
                        <div className='flex justify-center'><button className="btn btn-active btn-accent px-20 py-5">Send</button></div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
