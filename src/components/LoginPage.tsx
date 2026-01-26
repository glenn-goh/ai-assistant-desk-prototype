import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import type { UserProfile } from '../App';

interface LoginPageProps {
    onLogin: (profile: UserProfile, skipOnboarding: boolean) => void;
}

// Mock user accounts
const MOCK_ACCOUNTS = [
    {
        email: 'jayden.tan@tech.gov.sg',
        name: 'Jayden Tan',
        role: 'Marketing Officer',
        agency: 'GovTech',
        password: 'password'
    },
    {
        email: 'michelle.lim@tech.gov.sg',
        name: 'Michelle Lim',
        role: 'HR Officer',
        agency: 'GovTech',
        password: 'password'
    },
    {
        email: 'sarah_chen@tech.gov.sg',
        name: 'Sarah Chen',
        role: 'Policy Officer',
        agency: 'GovTech',
        password: 'password'
    }
];

export function LoginPage({ onLogin }: LoginPageProps) {
    const [step, setStep] = useState<'email' | 'otp'>('email');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<typeof MOCK_ACCOUNTS>([]);
    const [error, setError] = useState('');
    const suggestionsRef = useRef<HTMLDivElement>(null);
    const emailInputContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node) &&
                emailInputContainerRef.current && !emailInputContainerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setError('');

        if (value.length > 0) {
            const filtered = MOCK_ACCOUNTS.filter(account =>
                account.email.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(filtered.length > 0);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSelectEmail = (selectedEmail: string) => {
        setEmail(selectedEmail);
        setShowSuggestions(false);
    };

    const handleWOGLogin = () => {
        // WOG AD login bypasses everything and goes to onboarding
        const defaultProfile: UserProfile = {
            name: 'Jayden Tan',
            email: 'jayden.tan@tech.gov.sg',
            role: 'Marketing Officer',
            agency: 'GovTech'
        };
        onLogin(defaultProfile, false);
    };

    const handleEmailSubmit = () => {
        setError('');

        if (!email) {
            setError('Please enter your email address');
            return;
        }

        // Check if email matches a mock account
        const account = MOCK_ACCOUNTS.find(acc => acc.email.toLowerCase() === email.toLowerCase());

        if (!account) {
            setError('Invalid email address');
            return;
        }

        setStep('otp');
    };

    const handleOtpSubmit = () => {
        setError('');

        // Accept any random number, but let's enforce 6 digits as requested
        if (!otp || otp.length !== 6 || isNaN(Number(otp))) {
            setError('Please enter a valid 6-digit OTP');
            return;
        }

        // Find account again to pass to onLogin
        const account = MOCK_ACCOUNTS.find(acc => acc.email.toLowerCase() === email.toLowerCase());
        
        if (account) {
            const userProfile: UserProfile = {
                name: account.name,
                email: account.email,
                role: account.role,
                agency: account.agency
            };
            onLogin(userProfile, true); // true = skip onboarding
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (step === 'email') {
                handleEmailSubmit();
            } else {
                handleOtpSubmit();
            }
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
            <Card className="w-full max-w-md shadow-2xl border-slate-200 dark:border-slate-800">
                <CardContent className="p-8 space-y-6">
                    <h1 className="text-slate-800 dark:text-white text-center">
                        Log in to the WOG AI-Assistant
                    </h1>

                    {/* WOG AD Login */}
                    <Button
                        className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white"
                        onClick={handleWOGLogin}
                    >
                        Log in with WOG AD
                    </Button>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">or</span>
                        </div>
                    </div>

                    {/* Email / OTP Login */}
                    <div className="space-y-4">
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                            {step === 'email' 
                                ? 'Log in with a .gov.sg or other whitelisted email address'
                                : `Enter the 6-digit OTP sent to ${email}`
                            }
                        </p>
                        
                        {step === 'email' ? (
                            <>
                                {/* Email Input with Autocomplete */}
                                <div className="relative" ref={emailInputContainerRef}>
                                    <Input
                                        type="email"
                                        placeholder="e.g. jane@data.gov.sg"
                                        value={email}
                                        onChange={handleEmailChange}
                                        onFocus={() => {
                                            if (email.length > 0 && filteredSuggestions.length > 0) {
                                                setShowSuggestions(true);
                                            }
                                        }}
                                        onKeyPress={handleKeyPress}
                                        className="h-12 bg-transparent border-slate-300 dark:border-slate-700"
                                        autoComplete="off"
                                    />
                                    
                                    {/* Autocomplete Dropdown */}
                                    {showSuggestions && filteredSuggestions.length > 0 && (
                                        <div
                                            ref={suggestionsRef}
                                            className="absolute z-50 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg max-h-48 overflow-y-auto"
                                        >
                                            {filteredSuggestions.map((account) => (
                                                <button
                                                    key={account.email}
                                                    className="w-full px-4 py-3 text-left hover:bg-slate-100 dark:hover:bg-slate-700 flex flex-col transition-colors"
                                                    onClick={() => handleSelectEmail(account.email)}
                                                    type="button"
                                                >
                                                    <span className="text-slate-900 dark:text-white">
                                                        {account.email}
                                                    </span>
                                                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                        {account.name} • {account.role}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {error && (
                                    <p className="text-sm text-red-600 dark:text-red-400">
                                        {error}
                                    </p>
                                )}

                                <Button
                                    className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white"
                                    onClick={handleEmailSubmit}
                                >
                                    Log in with Email OTP
                                </Button>
                            </>
                        ) : (
                            <>
                                {/* OTP Input */}
                                <Input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="123456"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => {
                                        // Only allow numbers
                                        const re = /^[0-9\b]+$/;
                                        if (e.target.value === '' || re.test(e.target.value)) {
                                            setOtp(e.target.value);
                                            setError('');
                                            
                                            // Auto-fill logic: if user types at least one digit, fill the rest randomly
                                            if (e.target.value.length === 1) {
                                                const randomSuffix = Math.floor(10000 + Math.random() * 90000).toString();
                                                setOtp(e.target.value + randomSuffix);
                                            }
                                        }
                                    }}
                                    onKeyPress={handleKeyPress}
                                    className="h-12 bg-transparent border-slate-300 dark:border-slate-700 text-center tracking-widest text-lg"
                                    autoComplete="one-time-code"
                                />

                                {error && (
                                    <p className="text-sm text-red-600 dark:text-red-400">
                                        {error}
                                    </p>
                                )}

                                <Button
                                    className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white"
                                    onClick={handleOtpSubmit}
                                >
                                    Log In
                                </Button>
                                
                                <button 
                                    className="w-full text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                    onClick={() => {
                                        setStep('email');
                                        setError('');
                                        setOtp('');
                                    }}
                                >
                                    Back to email
                                </button>
                            </>
                        )}
                    </div>

                    {/* Footer Link */}
                    <div className="text-center">
                        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 hover:underline">
                            For select agencies
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}