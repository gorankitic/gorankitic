// components
import { Html, Body, Head, Preview, Container, Section, Heading, Text, Hr } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
    message: string,
    email: string
}

const ContactFormEmail = ({ message, email }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New message from portfolio</Preview>
            <Tailwind>
                <Body className='bg-gray-100 text-gray-900'>
                    <Container>
                        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>You received message from portfolio form</Heading>
                            <Text>The sender's email is: {email}</Text>
                            <Hr />
                            <Text>{message}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ContactFormEmail;