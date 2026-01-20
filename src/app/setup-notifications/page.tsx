import React from 'react';
import Image from 'next/image';

type Step = {
    id: string;
    title: string;
    bullets: string[];
    alt?: string;
    label?: string;
    src?: string;
};

const stepsPhone: Step[] = [
    {
        id: 'p1',
        title: 'Open Gmail on your phone',
        bullets: [
            'Install the Gmail app from the App Store if needed.',
            'Open Gmail and sign in to the same account that receives TableSniper emails.',
        ],
    },
    {
        id: 'p2',
        title: 'Open notifications in the Gmail app',
        bullets: [
            'In Gmail, tap the menu icon (≡) in the top-left.',
            'Scroll down and tap Settings.',
            'From the settings menu, select Email notifications',
        ],
        alt: 'Gmail settings notifications on iPhone',
        label: 'iPhone screenshot: Settings → Email Notifications → High Priority',
        src: '/settings.PNG',
    },
    {
        id: 'p3',
        title: 'Enable notifications for Priority emails',
        bullets: [
            'Select notifications for High Priority only',
            'Navigate back to the Settings menu',
        ],
        alt: 'High Priority notifications settings on iPhone',
        label: 'iPhone screenshot: Inbox customization → Labels → Priority',
        src: '/email_notifications.PNG',
    },
    {
        id: 'p4',
        title: 'Automatically add future messages to the Priority label',
        bullets: [
            'In Settings → Inbox customization → Labels, open the Priority label.',
            'Tap Add... and input `hello@tablesniper.com` to automatically add future messages to this label.',
        ],
        alt: 'Add auto-labeling rule for Priority label on iPhone',
        label: 'iPhone screenshot: Priority label → Add auto-labeling',
        src: '/mark_as_priority.PNG',
    },
    {
        id: 'p5',
        title: 'Confirm iPhone notification permissions',
        bullets: [
            'If alerts are delayed or missing: open iPhone Settings → Notifications → Gmail.',
            'Ensure Allow Notifications is ON.',
            'Ensure Time Sensitive Notifications is ON',
            'Ensure Alert styles and settings are to your preference',
            'Check Focus / Do Not Disturb modes are not silencing Gmail.',
        ],
        alt: 'iPhone notification permissions for Gmail',
        label: 'iPhone screenshot: iOS Settings → Notifications → Gmail',
        src: '/gmail_notifications.PNG',
    },
];

function StepCard({ step, index }: { step: Step; index: number }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                                {index + 1}
                            </div>
                            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                                Phone
                            </span>
                        </div>
                        <h3 className="mt-3 text-base font-semibold text-slate-900 sm:text-lg">
                            {step.title}
                        </h3>
                    </div>
                </div>

                <ul className="mt-4 space-y-2 text-slate-700">
                    {step.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-5">
                    {/*
                     */}
                    {step.alt && step.label && step.src ? (
                        <div className="flex w-full items-center justify-center">
                            <Image
                                className="rounded-2xl"
                                width={400}
                                height={400}
                                alt={step.alt}
                                src={step.src}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default async function GmailPhonePriorityWalkthrough() {
    return (
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Gmail on iPhone: Priority Label + Push Notifications
                </h1>
                <p className="text-sm sm:text-base">
                    Follow these steps on your phone to ensure TableSniper emails are added to the
                    Priority label and trigger push notifications.
                </p>
            </header>

            <div className="mt-6 grid gap-4 sm:gap-5">
                {stepsPhone.map((s, idx) => (
                    <StepCard key={s.id} step={s} index={idx} />
                ))}
            </div>
        </div>
    );
}
