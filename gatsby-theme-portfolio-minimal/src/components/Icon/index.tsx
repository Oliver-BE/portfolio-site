import React from 'react';
import { IconPdf } from './IconPdf';
import { IconBehance } from './IconBehance';
import { IconExternal } from './IconExternal';
import { IconGithub } from './IconGithub';
import { IconHashnode } from './IconHashnode';
import { IconLinkedIn } from './IconLinkedIn';
import { IconMail } from './IconMail';
import { IconMedium } from './IconMedium';
import { IconTwitter } from './IconTwitter';

interface IconProps {
    name: string;
    color?: string;
}

export function Icon(props: IconProps): React.ReactElement | null {
    switch (props.name.toLowerCase()) {
        case 'pdf':
            return <IconPdf color={props.color} />;
        case 'external':
            return <IconExternal color={props.color} />;
        case 'behance':
            return <IconBehance color={props.color} />;
        case 'github':
            return <IconGithub color={props.color} />;
        case 'linkedin':
            return <IconLinkedIn color={props.color} />;
        case 'mail':
            return <IconMail color={props.color} />;
        case 'medium':
            return <IconMedium color={props.color} />;
        case 'twitter':
            return <IconTwitter color={props.color} />;
        case 'hashnode':
            return <IconHashnode color={props.color} />;
        default:
            return null;
    }
}
