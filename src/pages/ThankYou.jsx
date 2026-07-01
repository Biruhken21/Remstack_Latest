import { CheckCircle, Home, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <SEO
                title="Order Success - RemStack Technologies"
                description="Your order has been received. Our team will contact you shortly."
            />
            <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-12 text-center space-y-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full text-green-600 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-black text-gray-900">Order Received!</h1>
                    <p className="text-gray-500 leading-relaxed">
                        Thank you for choosing RemStack. We have received your request and our team will contact you shortly to finalize the details.
                    </p>
                </div>

                <div className="flex flex-col space-y-4 pt-4">
                    <Link
                        to="/products"
                        className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center space-x-2"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        <span>Continue Shopping</span>
                    </Link>
                    <Link
                        to="/"
                        className="w-full py-4 bg-white border border-gray-200 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
                    >
                        <Home className="w-5 h-5" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                <p className="text-xs text-gray-400">
                    A confirmation email will be sent to the address provided in the form.
                </p>
            </div>
        </div>
    );
};

export default ThankYou;
