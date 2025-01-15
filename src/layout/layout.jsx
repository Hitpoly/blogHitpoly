'use client'
import React from 'react';
import { Box, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FadeInOut } from '../constant/animations';
import { CARD_BACKGROUND } from '../constant/Colors';

const Section = styled.section({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const StylePrincipalContainer = styled.main({
    display: 'grid',
    gridTemplateColumns: 'minmax(100%, 2fr)',
    maxWidth: 1440,
    width: '100%',
    margin: '0 auto',
    placeItems: 'center',
});

const StyleContentContainer = styled.div({
    display: 'grid',
    gridTemplateColumns: 'minmax(100%, 1fr)',
    width: '100%',
    padding: '0 20px',
    maxWidth: 1240,
});

export const PrincipalContainer = ({ children, ...props }) => {
    return (
        <StylePrincipalContainer {...props}>
            {children}
        </StylePrincipalContainer>
    );
};

export const ContentContainer = ({ children, ...props }) => {
    return (
        <StyleContentContainer {...props}>
            {children}
        </StyleContentContainer>
    );
};

export const Container = ({ children, ...props }) => {
    return (
        <Grid container {...props}>
            {children}
        </Grid>
    );
};

export const Item = ({ children, ...props }) => {
    return (
        <Grid item {...props}>
            {children}
        </Grid>
    );
};

export const Wrapper = ({ children, ac, bg, ...props }) => {
    return (
        <div style={{ backgroundColor: bg, minHeight: '100vh', display: ac ? 'flex' : 'block', alignItems: ac ? 'center' : 'flex-start' }} {...props}>
            {children}
        </div>
    );
};

export const Row = ({ children, ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }} {...props}>
            {children}
        </div>
    );
};

export const Column = ({ children, ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} {...props}>
            {children}
        </div>
    );
};

export const Card = ({ children, ...props }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={FadeInOut}
        >
            <Box
                style={{ borderRadius: 24, padding: '48px', backgroundColor: CARD_BACKGROUND }}
                {...props}
            >
                {children}
            </Box>
        </motion.div>
    );
};
