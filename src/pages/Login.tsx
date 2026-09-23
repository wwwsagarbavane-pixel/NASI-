import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, BookOpen, Users, Leaf } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!email) {
            setError('Please enter your email.');
            return;
        }
        if (!email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!password) {
            setError('Please enter your password.');
            return;
        }

        // Simulate login success and redirect to a dashboard (or home for now)
        // Since there is no actual dashboard built yet, redirecting to home.
        navigate('/');
    };

    return (
        <div className="login-viewport">
            {/* Background Image Layer */}
            <div className="login-bg-layer"></div>
            
            {/* Tagline Graphic Over Background */}
            <div className="login-tagline-overlay">
                <span className="tagline-text">Seeds for<br/>a Brighter Tomorrow</span>
                <div className="tagline-tricolor"></div>
            </div>

            <div className="login-container">
                {/* Left Side: Branding & Info */}
                <div className="login-left">
                    <Link to="/" className="login-logo">
                        <img src="/assets/nsai-logo.png" alt="NSAI Logo" />
                    </Link>
                    
                    <div className="login-welcome-label">
                        <div className="welcome-line"></div>
                        <span>WELCOME BACK</span>
                    </div>

                    <h1 className="login-heading">
                        <span className="text-navy">Member’s</span> <span className="text-green">Login</span>
                    </h1>

                    <p className="login-description">
                        Access your account to stay connected with NSAI’s resources, updates and opportunities.
                    </p>

                    <div className="login-features">
                        <div className="l-feature">
                            <div className="l-icon"><BookOpen size={20} /></div>
                            <span>Access<br/>Resources</span>
                        </div>
                        <div className="l-feature">
                            <div className="l-icon"><Users size={20} /></div>
                            <span>Member<br/>Network</span>
                        </div>
                        <div className="l-feature">
                            <div className="l-icon"><Leaf size={20} /></div>
                            <span>Grow<br/>Together</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Card */}
                <div className="login-right">
                    <div className="login-card">
                        
                        {/* Botanical Decoration Top Right */}
                        <div className="login-card-deco">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M75 0C75 0 85 20 70 35C55 50 25 50 25 50C25 50 35 30 50 15C65 0 75 0 75 0Z" fill="#006B3F" fillOpacity="0.05"/>
                                <path d="M100 25C100 25 90 45 70 55C50 65 15 60 15 60C15 60 30 40 50 30C70 20 100 25 100 25Z" fill="#006B3F" fillOpacity="0.05"/>
                            </svg>
                        </div>

                        <div className="login-card-header">
                            <h2>Member’s <span className="text-green">Login</span></h2>
                            <p>Sign in to your NSAI account</p>
                        </div>

                        {error && <div className="login-error">{error}</div>}

                        <form onSubmit={handleLogin} className="login-form">
                            <div className="l-input-group">
                                <div className="l-input-icon left"><Mail size={20} /></div>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="l-input-group">
                                <div className="l-input-icon left"><Lock size={20} /></div>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Enter your password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" className="l-input-icon right toggle-pwd" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <div className="l-form-options">
                                <label className="l-checkbox">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="l-forgot-link">Forgot password?</a>
                            </div>

                            <button type="submit" className="l-submit-btn">
                                Login <ArrowRight size={20} />
                            </button>
                        </form>

                        <div className="l-divider">
                            <span>Not a member yet?</span>
                        </div>

                        <button type="button" className="l-apply-btn" onClick={() => navigate('/membership-forms')}>
                            Apply for Membership
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
