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
import Advocacy from './pages/Advocacy';
import Publications from './pages/Publications';
import SocialInitiatives from './pages/SocialInitiatives';
import SeedRules from './pages/SeedRules';
import Performance from './pages/Performance';
import MinutesOfMeeting from './pages/MinutesOfMeeting';
import IPR from './pages/IPR';
import PressRoom from './pages/PressRoom';
import Calendar from './pages/Calendar';
import WorkshopTrainingPage from './pages/WorkshopTrainingPage';

// Templates
import ResourceCenterTemplate from './pages/templates/ResourceCenterTemplate';
import MediaGalleryTemplate from './pages/templates/MediaGalleryTemplate';
import EventListTemplate from './pages/templates/EventListTemplate';
import ContentPageTemplate from './pages/templates/ContentPageTemplate';
import DetailPage from './pages/templates/DetailPage';
import PdfGridPage from './pages/templates/PdfGridPage';

// Mock Data for legacy completed sections
import { mockDocuments, mockEvents, mockPhotos, mockContentBlocks } from './data/mockData';

// Real Scraped Data
import { 
  policyData, 
  publicationsData, 
  resourcesData, 
  mediaData, 
  eventsData 
} from './data/nsai';

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
          <Route path="calendar" element={<Calendar />} />
          
          <Route path="details/:id" element={<DetailPage />} />
          
          {/* Custom Sections Built to Match Screenshots */}
          <Route path="advocacy" element={<Advocacy />} />
          <Route path="publications" element={<Publications />} />
          <Route path="social-initiatives" element={<SocialInitiatives />} />
          <Route path="seed-rules" element={<SeedRules />} />
          <Route path="performance-label" element={<Performance />} />
          <Route path="minutes" element={<MinutesOfMeeting />} />
          <Route path="ipr" element={<IPR />} />
          <Route path="reports-recommendations" element={<Reports />} />
          
          <Route path="photo-gallery" element={<MediaGalleryTemplate title="Photo Gallery" description="Visual journey through our events and activities." data={mediaData.filter(d => d.parentSection === 'photoGallery')} type="photo" />} />
          <Route path="video-gallery" element={<MediaGalleryTemplate title="Video Gallery" description="Watch our latest videos and webinars." data={mediaData.filter(d => d.parentSection === 'videoGallery')} type="video" />} />
          <Route path="press-room" element={<PressRoom />} />
          <Route path="events" element={<EventListTemplate title="NSAI Events" description="All our upcoming and past events." data={eventsData} />} />
          
          <Route path="past-conferences" element={<EventListTemplate title="Past Conferences" description="Archive of our major industry conferences." data={eventsData} />} />
          <Route path="other-events" element={<EventListTemplate title="Other Events" description="Seminars, dialogues, and industry meetings." data={eventsData} />} />
          <Route path="workshop-training" element={<WorkshopTrainingPage />} />
          <Route path="agm" element={<PdfGridPage title="AGM" description="National Seed Association of India (NSAI) invites all seeds men to partner the future growth of the fifth largest seed industry in the world by enrolling as a member." data={eventsData.filter(d => d.parentSection === 'agm')} />} />
          <Route path="election" element={<PdfGridPage title="NSAI Election 2025" description="National Seed Association of India (NSAI) invites all seeds men to partner the future growth of the fifth largest seed industry in the world by enrolling as a member." data={eventsData.filter(d => d.parentSection === 'elections')} />} />

          {/* Fallback route for unimplemented pages */}
          <Route path="*" element={<div className="container" style={{padding: '100px 0'}}><h2>Page under construction (React Migration)</h2></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
