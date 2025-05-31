import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '../app/page'

describe('HomePage', () => {
    it('renders the hero section', () => {
        render(<HomePage />)

        const heading = screen.getByRole('heading', {
            name: /unleash your speed potential/i
        })

        expect(heading).toBeInTheDocument()
    })

    it('renders the why train with us section', () => {
        render(<HomePage />)

        const sectionHeading = screen.getByRole('heading', {
            name: /why train with wilson speed academy/i
        })

        expect(sectionHeading).toBeInTheDocument()
    })
}) 