import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Partners from './components/Partners';
import ServiceDetail from './components/ServiceDetail';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

const services = t('services.items', { returnObjects: true });
const serviceRoutes = Object.entries(services).flatMap(([serviceKey, service]) =>
  Object.entries(service.subOptions).map(([subKey]) => ({
    path: `/services/${serviceKey}/${subKey}`,
    service: serviceKey,
    subOption: subKey,
  }))
);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/partners" element={<Partners/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            {serviceRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<ServiceDetail />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;