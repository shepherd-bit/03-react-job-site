import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import JobCategories from './components/JobCategories';
import Steps from './components/Steps';
import FeaturedJobs from './components/FeaturedJobs';
import RelatedNews from './components/RelatedNews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <JobCategories />
        <Steps />
        <FeaturedJobs />
        <RelatedNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}