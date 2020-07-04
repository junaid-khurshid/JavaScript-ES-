//Rules for let and Const
//Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
//Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope,
//and can’t be reassigned

//use let when you plan to reassign new values to a variable, and
//use const when you don’t plan on reassigning new values to a variable.

const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();