import React from 'react';
import PageHero from '../components/common/PageHero';
import LayoutWithSidebar from '../components/common/LayoutWithSidebar';
import { resourcesData } from '../data/nsai';
import { FileText } from 'lucide-react';

const categoryMap: Record<string, string> = {
    "The Seeds Act, 1966": "Legislation on Seeds",
    "The Seeds (Amendment) Act, 1972": "Legislation on Seeds",
    "The Seeds Rules, 1968": "Legislation on Seeds",
    
    "The Seeds (Amendment) Rule, 1973": "The seeds (Amendment) Rules",
    "Seeds (Amendment) Rules, 1974": "The seeds (Amendment) Rules",
    
    "The Seeds (Control) Order, 1983": "Seed Order Control",
    "Seed Control Order(Amendment) 2006": "Seed Order Control",
    
    "The essential commodities Act, 1955": "Essential Commodities Act",
    "The Seeds Bill, 2004": "Essential Commodities Act",
    
    "National Seed Policy, 2002": "Policies on Seed",
    "Export/Import Policy On Seed and Planting material": "Policies on Seed",
    "New Policy on Seed Development, 1988": "Policies on Seed",
    
    "National Seed Plan": "National Seed Plan",
    
    "Central Sub Committee on Crop Standards-Horticulture Crops 2010-12": "Orders",
    "Central Sub-Committee on Crop Standards-Agricultural Crops 2010-12": "Orders"
};

const SeedRules = () => {
    // Get seed acts data and filter out empty titles
    const baseData = resourcesData.filter(d => d.parentSection === 'seedActs' && d.title);
    
    // Enrich with category from mapping
    const categorizedData = baseData.map(doc => ({
        ...doc,
        category: categoryMap[doc.title] || 'Legislation on Seeds' // Fallback
    }));

    const tabs = [
        { id: 'Legislation on Seeds', label: 'Legislation on Seeds', icon: <FileText size={18} /> },
        { id: 'The seeds (Amendment) Rules', label: 'The seeds (Amendment) Rules', icon: <FileText size={18} /> },
        { id: 'Seed Order Control', label: 'Seed Order Control', icon: <FileText size={18} /> },
        { id: 'Essential Commodities Act', label: 'Essential Commodities Act', icon: <FileText size={18} /> },
        { id: 'Policies on Seed', label: 'Policies on Seed', icon: <FileText size={18} /> },
        { id: 'National Seed Plan', label: 'National Seed Plan', icon: <FileText size={18} /> },
        { id: 'Orders', label: 'Orders', icon: <FileText size={18} /> },
    ];

    return (
        <main className="main-content">
            <PageHero title="SEED RULES" />
            <LayoutWithSidebar 
                title="" 
                tabs={tabs} 
                data={categorizedData} 
                defaultTabId="Legislation on Seeds" 
            />
        </main>
    );
};

export default SeedRules;
