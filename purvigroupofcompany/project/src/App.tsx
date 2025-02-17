
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <h1 className="text-4xl md:text-5xl font-black text-blue-600 text-center pt-24 pb-8">
        Purvi Group Of Company - Trusted Security & Facility Management in Hyderabad
        </h1>
        </main>
      <HeroSection />
      <ServicesSection />

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Our Services</h2>
          <BookingForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-4">
              <strong>Address:</strong> Flot No:204, 3rd floor, City Home Apartment, Himayatnagar-500029
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> <a href="tel:+919848000562" className="text-blue-600 hover:underline">+91 9848000562</a>
            </p>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:purvigroup1@gmail.com" className="text-blue-600 hover:underline">purvigroup1@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Purvi Facility Management Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;