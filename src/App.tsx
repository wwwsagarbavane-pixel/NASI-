import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
// Import pages (we will create these next)
import Home from './pages/Home';
import About from './pages/About';
import Reports from './pages/Reports';
import Membership from './pages/Membership';
import MembershipForms from './pages/MembershipForms';
import Login from './pages/Login';
import Policy from './pages/Policy';

// Templates
import ResourceCenterTemplate from './pages/templates/ResourceCenterTemplate';
import MediaGalleryTemplate from './pages/templates/MediaGalleryTemplate';
import EventListTemplate from './pages/templates/EventListTemplate';
import ContentPageTemplate from './pages/templates/ContentPageTemplate';

// Mock Data
import { mockDocuments, mockEvents, mockPhotos, mockContentBlocks } from './data/mockData';

const RouteHandler = () => {
    const location = useLocation();
    
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).initNSAI) {
            // setTimeout to ensure DOM is fully painted
            setTimeout(() => {
                (window as any).initNSAI();
            }, 100);
        }
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

function App() {
  return (
    <Router>
      <RouteHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="reports" element={<Reports />} />
          <Route path="policy" element={<Policy />} />
          <Route path="membership-info" element={<Membership />} />
          <Route path="membership-forms" element={<MembershipForms />} />
          
          {/* Dynamically Generated Sections using Templates */}
          <Route path="brochure" element={<ResourceCenterTemplate title="NSAI Brochure" description="Download the official NSAI brochures and corporate materials." data={mockDocuments} />} />
          <Route path="advocacy" element={<ContentPageTemplate title="Advocacy" description="Driving change through strategic industry advocacy." intro="NSAI represents the seed industry before policy makers..." data={mockContentBlocks} />} />
          <Route path="publications" element={<ResourceCenterTemplate title="Publications" description="Research, insights, and industry publications." data={mockDocuments} />} />
          <Route path="social-initiatives" element={<ContentPageTemplate title="Social Initiatives" description="Our commitment to sustainable and social growth." intro="We believe in giving back to the farming community..." data={mockContentBlocks} />} />
          <Route path="breeder-seed-index" element={<ResourceCenterTemplate title="Breeder Seed Index" description="Comprehensive index of breeder seeds available." data={mockDocuments} />} />
          
          <Route path="seed-rules" element={<ResourceCenterTemplate title="Seed Acts & Bills" description="Important legislations governing the Indian seed sector." data={mockDocuments} />} />
          <Route path="performance-label" element={<ContentPageTemplate title="Performance Label" description="Standardization and performance metrics for seeds." intro="Ensuring quality through performance standards..." data={mockContentBlocks} />} />
          <Route path="minutes" element={<ResourceCenterTemplate title="Minutes of Meetings" description="Archive of NSAI official meeting minutes." data={mockDocuments} />} />
          <Route path="ipr" element={<ResourceCenterTemplate title="Intellectual Property Rights" description="Guidelines and resources regarding IPR in agriculture." data={mockDocuments} />} />
          <Route path="reports-recommendations" element={<ResourceCenterTemplate title="Reports & Recommendations" description="Committee reports and official recommendations." data={mockDocuments} />} />
          
          <Route path="photo-gallery" element={<MediaGalleryTemplate title="Photo Gallery" description="Visual journey through our events and activities." data={mockPhotos} type="photo" />} />
          <Route path="video-gallery" element={<MediaGalleryTemplate title="Video Gallery" description="Watch our latest videos and webinars." data={mockPhotos} type="video" />} />
          <Route path="press-room" element={<ContentPageTemplate title="Press Room" description="Official press releases and media statements." intro="Latest updates from NSAI..." data={mockContentBlocks} />} />
          
          <Route path="past-conferences" element={<EventListTemplate title="Past Conferences" description="Archive of our major industry conferences." data={mockEvents} />} />
          <Route path="other-events" element={<EventListTemplate title="Other Events" description="Seminars, dialogues, and industry meetings." data={mockEvents} />} />
          <Route path="workshop-training" element={<EventListTemplate title="Workshop & Training" description="Skill development and training programs." data={mockEvents} />} />
          <Route path="agm" element={<EventListTemplate title="AGM" description="Annual General Meetings of NSAI." data={mockEvents} />} />
          <Route path="election" element={<EventListTemplate title="NSAI Election" description="Updates and notices regarding NSAI elections." data={mockEvents} />} />

          {/* Fallback route for unimplemented pages */}
          <Route path="*" element={<div className="container" style={{padding: '100px 0'}}><h2>Page under construction (React Migration)</h2></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
