import React from 'react';

const Footer = () => {
    return (
        <div className="w-full h-64 bg-primary-default flex justify-center items-center gap-10 text-background-default tracking-widest">
            <div className="grid grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-semibold font-roboto-slab mb-4">
                        Let Us Help You
                    </h3>
                    <p className="text-sm mb-1">Home</p>
                    <p className="text-sm">Wishlist</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold font-roboto-slab mb-4">
                        Contact Us
                    </h3>
                    <p className="text-sm mb-1">01789807112</p>
                    <p className="text-sm ">01712822912</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold font-roboto-slab mb-4">
                        Address
                    </h3>
                    <p className="text-sm mb-1">Mirpur 12,</p>
                    <p className="text-sm ">Dhaka 1216, Bangladesh</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold font-roboto-slab mb-4">
                        Reach Us
                    </h3>
                    <p className="text-sm mb-1">rifatul.ramim@gmail.com</p>
                    <p className="text-sm">book.manager@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
