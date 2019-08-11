import React from 'react';
import { Link } from 'react-router-dom';

function Play() {
    return (
        <div>
            <Link to='/'>
                <button>
                    Exit
                </button>
            </Link>
            Play
        </div>
    );
}

export default Play;
