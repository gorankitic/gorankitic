
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
            <Preview>New message from portfolio form</Preview>
            <Tailwind>
                <Body className='bg-gray-100 text-black'>
                    <Container>
                        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>You received the message from the contact form</Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender'e email is: {email}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ContactFormEmail;