import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
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
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
            </Layout>
          }
        />
        <Route
          path="/partners"
          element={
            <Layout>
              <Partners />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        {serviceRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                <ServiceDetail />
              </Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;