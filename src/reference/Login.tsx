import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

interface LoginPageProps {
    onLoginComplete: () => void;
}

export function LoginPage({ onLoginComplete }: LoginPageProps) {
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        // In a real app, this would validate the email and authenticate
        onLoginComplete();
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
            <Card className="w-full max-w-md shadow-2xl border-slate-200 dark:border-slate-800">
                <CardContent className="p-8 space-y-6">
                    <h1 className="text-2xl font-semibold text-slate-800 dark:text-white text-center">
                        Log in to the WOG AI-Assistant
                    </h1>


                    {/* WOG AD Login */}
                    <Button
                        className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                        onClick={handleLogin}
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

                    {/* Email Login */}
                    <div className="space-y-4">
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                            Log in with a .gov.sg or other whitelisted email address
                        </p>
                        <Input
                            type="email"
                            placeholder="e.g. jane@data.gov.sg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12"
                        />
                        <Button
                            className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                            onClick={handleLogin}
                        >
                            Log in
                        </Button>
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
