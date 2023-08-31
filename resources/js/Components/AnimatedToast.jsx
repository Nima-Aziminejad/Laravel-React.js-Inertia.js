import React from 'react';
import { motion } from 'framer-motion';

const AnimatedToast = ({ message }) => {
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
                background: 'white',
                color: 'black',
                padding: '0px',
            }}
        >
            {message}
        </motion.div>
    );
};

export default AnimatedToast;
