
            /* Reset and base styles for modern minimal look */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                background-color: #1F2937; /* Primary: dark gray/black */
                color: #FFFFFF; /* Secondary white for text on dark backgrounds */
                line-height: 1.6;
                padding: 1rem;
            }

            /* Header with main title */
            .main-header {
                text-align: center;
                padding: 1.5rem 0;
                margin-bottom: 2rem;
                border-bottom: 1px solid #4B5563; /* Subtle border */
                max-width: 1200px;
                margin: 0 auto 2rem;
            }

            .main-header h1 {
                color: #FFFFFF; /* Secondary white */
                font-size: 2.5rem;
                font-weight: 600;
                margin: 0;
            }

            /* Navigation styling - horizontal on desktop, stacked on mobile */
            nav {
                background-color: #1F2937; /* Primary dark */
                padding: 1rem 0;
                margin-bottom: 2rem;
                max-width: 1200px;
                margin: 0 auto 2rem;
            }

            nav ul {
                list-style: none;
                display: flex;
                justify-content: center;
                gap: 2rem;
                flex-wrap: wrap;
            }

            nav li a {
                color: #3B82F6; /* Accent blue */
                text-decoration: none;
                font-weight: 500;
                transition: color 0.2s ease;
                padding: 0.5rem 1rem;
                border-radius: 4px;
            }

            nav li a:hover {
                color: #1D4ED8; /* Darker blue on hover */
                background-color: rgba(59, 130, 246, 0.1); /* Subtle hover background */
            }

            /* Form container */
            #list {
                max-width: 600px;
                margin: 0 auto;
                background-color: #F3F4F6; /* Extra: light gray for form background */
                color: #1F2937; /* Dark text for readability on light background */
                padding: 2rem;
                border-radius: 12px;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
            }

            /* Form styling */
            form {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            form > div {
                display: flex;
                flex-direction: column;
            }

            label {
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: #1F2937;
                font-size: 1.1rem;
            }

            input[type="text"],
            textarea {
                padding: 0.75rem;
                border: 1px solid #D1D5DB; /* Light border */
                border-radius: 6px;
                font-size: 1rem;
                background-color: #FFFFFF; /* White input background */
                color: #1F2937;
                transition: border-color 0.2s ease;
            }

            input[type="text"]:focus,
            textarea:focus {
                outline: none;
                border-color: #3B82F6; /* Accent blue on focus */
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }

            /* Content input as textarea for better multi-line support */
            #post-content {
                min-height: 120px;
                resize: vertical; /* Allow vertical resize only */
            }

            input[type="hidden"] {
                display: none; /* Hidden inputs don't need styling */
            }

            button[type="submit"] {
                background-color: #3B82F6; /* Accent blue */
                color: #FFFFFF;
                border: none;
                padding: 1rem;
                font-size: 1.1rem;
                font-weight: 600;
                border-radius: 6px;
                cursor: pointer;
                transition: background-color 0.2s ease;
                margin-top: 1rem;
            }

            button[type="submit"]:hover {
                background-color: #1D4ED8; /* Darker blue on hover */
            }

            /* Responsive design for all screens */
            @media (max-width: 768px) {
                body {
                    padding: 0.5rem;
                }

                .main-header h1 {
                    font-size: 2rem;
                }

                nav ul {
                    gap: 1rem;
                    justify-content: center;
                }

                nav li a {
                    padding: 0.5rem;
                    font-size: 0.95rem;
                }

                #list {
                    padding: 1.5rem;
                    margin: 0 1rem;
                }

                input[type="text"],
                textarea {
                    font-size: 1rem;
                }
            }

            @media (max-width: 480px) {
                .main-header h1 {
                    font-size: 1.5rem;
                }

                nav ul {
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                #list {
                    padding: 1rem;
                    margin: 0 0.5rem;
                    border-radius: 8px;
                }

                button[type="submit"] {
                    font-size: 1rem;
                }
            }

            /* Ensure script loads properly without interfering with layout */
        