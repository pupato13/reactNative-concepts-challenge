import React, { useState, useEffect } from "react";

import api from "./services/api";

import {
	SafeAreaView,
	View,
	FlatList,
	Text,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

export default function App() {
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		api.get("repositories").then((response) => {
			if (Array.isArray(response.data)) {
				setRepositories(response.data);
			}
		});
	}, []);

	const hasRepositories = () => {
		return repositories !== undefined && repositories.length > 0;
	};

	async function handleLikeRepository(id) {
		var response = await api.post(`repositories/${id}/like`);

		if (response.status === 200) {
			let repos = [...repositories];

			let indexRepo = repos.findIndex((repo) => repo.id === id);

			repos[indexRepo] = response.data;

			setRepositories(repos);
		}
	}

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#7159c1" />

			<SafeAreaView style={styles.container}>
				{hasRepositories() ? (
					<FlatList
						data={repositories}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item: repository }) => (
							<View
								key={repository.id}
								style={styles.repositoryContainer}
							>
								<Text style={styles.repository}>
									{repository.title}
								</Text>
								<View style={styles.techsContainer}>
									{repository.techs &&
										repository.techs.map((tech, index) => (
											<Text
												style={styles.tech}
												key={index.toString()}
											>
												{tech}
											</Text>
										))}
								</View>
								<View style={styles.likesContainer}>
									<Text
										style={styles.likeText}
										testID={`repository-likes-${repository.id}`}
									>
										{repository.likes} curtidas
									</Text>
								</View>
								<TouchableOpacity
									style={styles.button}
									onPress={() =>
										handleLikeRepository(repository.id)
									}
									testID={`like-button-${repository.id}`}
								>
									<Text style={styles.buttonText}>
										Curtir
									</Text>
								</TouchableOpacity>
							</View>
						)}
					></FlatList>
				) : null}
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#7159c1",
	},
	repositoryContainer: {
		marginBottom: 15,
		marginHorizontal: 15,
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 10,
	},
	repository: {
		fontSize: 24,
		fontWeight: "bold",
	},
	techsContainer: {
		flexDirection: "row",
		marginTop: 10,
	},
	tech: {
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 10,
		backgroundColor: "#04d361",
		paddingHorizontal: 10,
		paddingVertical: 5,
		color: "#FFF",
	},
	likesContainer: {
		marginTop: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	likeText: {
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 10,
	},
	button: {
		marginTop: 10,
		// alignItems: "center",
		// justifyContent: "center",
	},
	buttonText: {
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 10,
		color: "#fff",
		backgroundColor: "#7159c1",
		padding: 15,
	},
});
