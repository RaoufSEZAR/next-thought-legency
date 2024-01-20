import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
	const res = await fetch("http://localhost:3000/api/blog", {
		next: { revalidate: 3600 },
	});

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};

const posts = [
	{ id: 1, title: "Post 1", body: "......", userId: 1 },
	{ id: 2, title: "Post 2", body: "......", userId: 1 },
	{ id: 3, title: "Post 3", body: "......", userId: 2 },
	{ id: 4, title: "Post 4", body: "......", userId: 2 },
];

const BlogPage = async () => {
	// FETCH DATA WITH AN API
	// const posts = await getData();

	// FETCH DATA WITHOUT AN API
	// const posts = await posts;

	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div className={styles.post} key={post.id}>
					<PostCard post={post} />
				</div>
			))}
		</div>
	);
};

export default BlogPage;
