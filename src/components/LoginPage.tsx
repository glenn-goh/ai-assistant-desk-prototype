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

        const account = MOCK_ACCOUNTS.find(acc => acc.email.toLowerCase() === email.toLowerCase());

        if (!account) {
            setError('Invalid email address');
            return;
        }

        setStep('otp');
    };

    const handleOtpSubmit = () => {
        setError('');

        if (!otp || otp.length !== 6 || isNaN(Number(otp))) {
            setError('Please enter a valid 6-digit OTP');
            return;
        }

        const account = MOCK_ACCOUNTS.find(acc => acc.email.toLowerCase() === email.toLowerCase());

        if (account) {
            const userProfile: UserProfile = {
                name: account.name,
                email: account.email,
                role: account.role,
                agency: account.agency
            };
            onLogin(userProfile, true);
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
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md">
                <CardContent className="p-8 pb-10 space-y-6">
                    <h1 className="text-gray-900 text-center text-lg font-bold">
                        Log in to the WOG AI-Assistant
                    </h1>

                    {/* WOG AD Login */}
                    <Button
                        className="w-full h-12"
                        onClick={handleWOGLogin}
                    >
                        Log in with WOG AD
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span>or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Email / OTP Login */}
                    <div className="space-y-4">
                        <p className="text-sm text-gray-700">
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
                                        className="h-12"
                                        autoComplete="off"
                                    />

                                    {/* Autocomplete Dropdown */}
                                    {showSuggestions && filteredSuggestions.length > 0 && (
                                        <div
                                            ref={suggestionsRef}
                                            className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-900 rounded-lg shadow-md max-h-48 overflow-y-auto"
                                        >
                                            {filteredSuggestions.map((account) => (
                                                <button
                                                    key={account.email}
                                                    className="w-full px-4 py-3 text-left hover:bg-gray-100 flex flex-col transition-colors first:rounded-t-md last:rounded-b-md"
                                                    onClick={() => handleSelectEmail(account.email)}
                                                    type="button"
                                                >
                                                    <span className="text-gray-900 font-medium">
                                                        {account.email}
                                                    </span>
                                                    <span className="text-xs text-gray-500 mt-0.5">
                                                        {account.name} • {account.role}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {error && (
                                    <p className="text-sm text-red-500 font-medium">
                                        {error}
                                    </p>
                                )}

                                <Button
                                    variant="outline"
                                    className="w-full h-12"
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
                                        const re = /^[0-9\b]+$/;
                                        if (e.target.value === '' || re.test(e.target.value)) {
                                            setOtp(e.target.value);
                                            setError('');

                                            if (e.target.value.length === 1) {
                                                const randomSuffix = Math.floor(10000 + Math.random() * 90000).toString();
                                                setOtp(e.target.value + randomSuffix);
                                            }
                                        }
                                    }}
                                    onKeyPress={handleKeyPress}
                                    className="h-12 text-center tracking-widest text-lg"
                                    autoComplete="one-time-code"
                                />

                                {error && (
                                    <p className="text-sm text-red-500 font-medium">
                                        {error}
                                    </p>
                                )}

                                <Button
                                    className="w-full h-12"
                                    onClick={handleOtpSubmit}
                                >
                                    Log In
                                </Button>

                                <button
                                    className="w-full text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
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

                </CardContent>
            </Card>
        </div>
    );
}
