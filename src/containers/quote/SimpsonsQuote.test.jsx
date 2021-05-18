import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from './SimpsonsQuote';

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=1',
        (req, res, ctx) => {
            return res(
                ctx.json([{
                    quote: 'Duffman is terrified that his existence will fade before his persona.',
                    character: 'Hank Azaria',
                    image: 'https://existentialdread.gif',
                }])
            );
        }

    )
);

describe('SimpsonsQuote container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('Fetch & render Simpsons API quote object on button click', async () => {
        render(<SimpsonsQuote />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        return waitFor(() => {
            screen.getAllByAltText('Hank Azaria');
            screen.getByText('Duffman is terrified that his existence will fade before his persona.');
        });
    });
});