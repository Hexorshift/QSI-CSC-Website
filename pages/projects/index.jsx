import {
	Heading,
	Flex,
	ScaleFade,
	SlideFade,
	Box,
	chakra,
	Tag
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

const Projects = () => {
	const [showAnimation, setShowAnimation] = useState({
		topText: false,
		projects: false
	});
	const [projects] = useState([
		{
			name: 'Space Invaders',
			link: 'https://space-invaders.vasilikikazalas.repl.co/',
			image: 'https://i.ibb.co/qrmKBNN/space-invaders.png',
			tags: ['p5.js', 'JavaScript']
		},
		{
			name: 'Flappy Berd',
			link: 'https://da-real-flappy-berd.sulaimanalam.repl.co/',
			image: '/logo.png',
			tags: ['p5.js', 'JavaScript']
		}
	]);

	useEffect(() => {
		setTimeout(() => {
			setShowAnimation((prev) => ({ ...prev, topText: true }));
		}, 350);
		setTimeout(() => {
			setShowAnimation((prev) => ({ ...prev, projects: true }));
		}, 700);
	}, []);

	return (
		<Layout
			meta={{
				title: 'Projects',
				description:
					'Check out the projects we built at the QSI Computer Science Club!'
			}}
		>
			<SlideFade in={showAnimation.topText} dir="bottom">
				<Heading fontSize="5xl" mb="3">
					Check out our projects!
				</Heading>
			</SlideFade>
			<Flex
				justifyContent="center"
				wrap="wrap"
				width="100%"
				margin="auto"
			>
				{projects.map((project, index) => {
					return (
						<ScaleFade key={index} in={showAnimation.projects}>
							<Flex
								as={chakra.a}
								href={project.link}
								target="_blank"
								border={`1px solid #EDF2F7`}
								borderRadius="md"
								flexDir="column"
								alignItems="flex-start"
								justifyContent="center"
								width={['200px', '400px', '500px', '500px']}
								shadow="xl"
								overflow="hidden"
								mb="8"
								mx="3.5"
							>
								<chakra.img
									src={project.image}
									alt="projectImage"
									width={['200px', '400px', '500px', '500px']}
								/>
								<Box pt="2" px="3">
									<Heading fontSize="2xl">
										{project.name}
									</Heading>
									{project.tags.map((tag, index) => (
										<Tag
											key={index}
											fontWeight="bold"
											mb="3"
											mr="2"
											colorScheme="red"
										>
											{tag}
										</Tag>
									))}
								</Box>
							</Flex>
						</ScaleFade>
					);
				})}
			</Flex>
		</Layout>
	);
};

export default Projects;
