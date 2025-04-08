import React from "react";
import { Navbar } from "./Navbar.jsx"

import { Card } from "./Card.jsx"

import { Jumbotron } from "./Jumbotron.jsx"
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container text-center">

				<Jumbotron />
				<div className="row justify-content-center gap-3">
					<Card title="Creeper" description="Mysterious creature that explodes" btn_label="Go to" btn_Url="https://google.com" img_src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUdtTwAAAAHPiEetDwAAAIJPSEbuz0mwEgAKBMctjsDAAAlfjkIQicFPiEofDkwwk0IGBEIQiIINiAjhDYro0gAKRYIQyInwEQLFhApvEsAFQABKxIADwIALBIIOyMMQCcLNyMMIxU0zVMAMRwjnjwsjj8hhzYjgTYHLRwEOBsLLiERPCYvhEAygkQryUowxlInq0IwnUj63g5HAAAEwElEQVR4nO2d61biMBRGaUsoQQpWrDBToXgZdW5e3v/l5qTizACBnjMSkjrfXriWP/Ajm8SWpCel0/nYJInvFrgGhu3nPzD03QAAAAAAAAAAAAAAAAAAAAAAAADALQmTkJJFaC4BJfOhd89RvLtkGaYd2slYcpcs49M4nU5TJoEkixh/Lss+l8up5o88d8lCw3mWZSozxPVj1y/0nLg/1Qnf0Fmy0LCvuMSqn0r60Fmy0LCkfHY7RKO0jB0ly0jnOY2UmMNqLLGTy3oUOkgWQAfztJ/FitMKepLit6NOpi48fHJghpzgNhvyBIMxNE2hI16bDReLLN938MvUohCctXRaLPYfP+kwlB/XUFVVvpsL+pmLDOf5xcWevGFVqeP2YVZdzU7305UYjgczYk/a7GqYHdUwr2aDqIFUYtgUFs2q4xrG8Wljm1J+oTwZdhvSTqvjjlKVMwwT9mYAjuEQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQjDAxqWxtBc7YpZhgl7XZ9nuLrSVjg1XF1try6YhswyrmbD2aoPicJRLcZbH2bcUTp1YUivrwpH9TRvFRM1i6zJsBvRO82spdSsa0+/rwhLri5LDS/LflGXlhXzphZF0XWaTrlcN6Z1b+rCt4JwWNfW+atN6b72mwLC68uCXYtXXl6newPXcSNXwxx3NdNiwasRM7VC/VRQIey0RvhPDWtDiWvSYReQ0KEr6wsOvE4raCWvkRbs0hu1Mjzgq78bxvHx1ZA9Sk2/N4aGREL/h/w+NIbazQcVZ8DwoxjyamLbaUifDkrFK4qlk4Vqp+HNkM9N+wzpjB+d7q3FW2NAZ4sWGjbW9r0yMM8bt89Qpzw/mjUQ0dh3g8UIDI1kNA7sE0szMIRhgKxP4BKpYV1QfMyJ4DsxE3FxH4Y2Pfob+ypG4/LZumHIU0Lds/EoMnzaCgnF0LThdmLh7ovAcBB9ubvbCLinx20Aima9YvJwZmHB9jOG6utiO+LhnnoxgMONnpzZ5oG5wDCKKttE62yi/X+7Ab1+z244PIih/z6kc1ZtuLF8FiuhYW42yW6GnAUySl8NN9clhIbDrQ5UdR+62pbOR8MQhsEbUgN6d+ZYurlU/w+GW+v9y0kIKxvanA/NZe91slx2PjSG2XqCyurzoXd0oifflsvl1kea7yLD70tLxsN9z/+NeRKd9E6iiLuuJoEiRz2aaPo27BhDs1r2PrrWiJNeALNgfRhDC3Uf+u5BGMIQhqOeb73OEQy99yIMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjC8KCGlr8P3/DHiMfJyWj0s4V92I0erUWZdp4snRi6YRSZPeWsK7javlu9BYb8u0a01VDz9n7T29BSw/fe2wSGxwKGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+uTDG+rEGA4Glh2WY83ePLjrTslk6H0DojEc2RpXG7JTdnzTqjF02XpW2+jx/PJyboF/wwfd0baA8/NnyvA9SusbJu2+ES3323J3pXSC2I9f/9jukCuK2VJ8e3+8GwIAAAAAAAAAAAAAAAAAABwM7xfoXBP2l50cgg9v+AvFx8371URtwwAAAABJRU5ErkJggg==" />
					<Card title="Empress of Light" description="The best Boss Fight in terraria" btn_label="Go to" btn_Url="https://youtube.com" img_src="https://pbs.twimg.com/media/Ez0TAS_WEAAPJcP.jpg:large" />
					<Card title="BlackPink" description="Best Kpop Group ever!!!! <3" btn_label="Go to" btn_Url="https://www.youtube.com/watch?v=32si5cfrCNc&pp=ygUJYmxhY2twaW5r" img_src="https://cdn.kobo.com/book-images/522824ee-9411-4cde-89b4-ce5dedd2feeb/1200/1200/False/blackpink.jpg" />
					<Card title="Zoroak" description="Besto Pokimono" btn_label="Go to" btn_Url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8e8Kleo8SI2Rm6KrNdY0GsMfJlLHtyPa2g&s" img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8e8Kleo8SI2Rm6KrNdY0GsMfJlLHtyPa2g&s" />

					<Card title="Creeper" description="Mysterious creature that explodes" btn_label="Go to" btn_Url="https://google.com" img_src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUdtTwAAAAHPiEetDwAAAIJPSEbuz0mwEgAKBMctjsDAAAlfjkIQicFPiEofDkwwk0IGBEIQiIINiAjhDYro0gAKRYIQyInwEQLFhApvEsAFQABKxIADwIALBIIOyMMQCcLNyMMIxU0zVMAMRwjnjwsjj8hhzYjgTYHLRwEOBsLLiERPCYvhEAygkQryUowxlInq0IwnUj63g5HAAAEwElEQVR4nO2d61biMBRGaUsoQQpWrDBToXgZdW5e3v/l5qTizACBnjMSkjrfXriWP/Ajm8SWpCel0/nYJInvFrgGhu3nPzD03QAAAAAAAAAAAAAAAAAAAAAAAADALQmTkJJFaC4BJfOhd89RvLtkGaYd2slYcpcs49M4nU5TJoEkixh/Lss+l8up5o88d8lCw3mWZSozxPVj1y/0nLg/1Qnf0Fmy0LCvuMSqn0r60Fmy0LCkfHY7RKO0jB0ly0jnOY2UmMNqLLGTy3oUOkgWQAfztJ/FitMKepLit6NOpi48fHJghpzgNhvyBIMxNE2hI16bDReLLN938MvUohCctXRaLPYfP+kwlB/XUFVVvpsL+pmLDOf5xcWevGFVqeP2YVZdzU7305UYjgczYk/a7GqYHdUwr2aDqIFUYtgUFs2q4xrG8Wljm1J+oTwZdhvSTqvjjlKVMwwT9mYAjuEQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQjDAxqWxtBc7YpZhgl7XZ9nuLrSVjg1XF1try6YhswyrmbD2aoPicJRLcZbH2bcUTp1YUivrwpH9TRvFRM1i6zJsBvRO82spdSsa0+/rwhLri5LDS/LflGXlhXzphZF0XWaTrlcN6Z1b+rCt4JwWNfW+atN6b72mwLC68uCXYtXXl6newPXcSNXwxx3NdNiwasRM7VC/VRQIey0RvhPDWtDiWvSYReQ0KEr6wsOvE4raCWvkRbs0hu1Mjzgq78bxvHx1ZA9Sk2/N4aGREL/h/w+NIbazQcVZ8DwoxjyamLbaUifDkrFK4qlk4Vqp+HNkM9N+wzpjB+d7q3FW2NAZ4sWGjbW9r0yMM8bt89Qpzw/mjUQ0dh3g8UIDI1kNA7sE0szMIRhgKxP4BKpYV1QfMyJ4DsxE3FxH4Y2Pfob+ypG4/LZumHIU0Lds/EoMnzaCgnF0LThdmLh7ovAcBB9ubvbCLinx20Aima9YvJwZmHB9jOG6utiO+LhnnoxgMONnpzZ5oG5wDCKKttE62yi/X+7Ab1+z244PIih/z6kc1ZtuLF8FiuhYW42yW6GnAUySl8NN9clhIbDrQ5UdR+62pbOR8MQhsEbUgN6d+ZYurlU/w+GW+v9y0kIKxvanA/NZe91slx2PjSG2XqCyurzoXd0oifflsvl1kea7yLD70tLxsN9z/+NeRKd9E6iiLuuJoEiRz2aaPo27BhDs1r2PrrWiJNeALNgfRhDC3Uf+u5BGMIQhqOeb73OEQy99yIMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjC8KCGlr8P3/DHiMfJyWj0s4V92I0erUWZdp4snRi6YRSZPeWsK7javlu9BYb8u0a01VDz9n7T29BSw/fe2wSGxwKGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+gSGvBAY+uTDG+rEGA4Glh2WY83ePLjrTslk6H0DojEc2RpXG7JTdnzTqjF02XpW2+jx/PJyboF/wwfd0baA8/NnyvA9SusbJu2+ES3323J3pXSC2I9f/9jukCuK2VJ8e3+8GwIAAAAAAAAAAAAAAAAAABwM7xfoXBP2l50cgg9v+AvFx8371URtwwAAAABJRU5ErkJggg==" />
					<Card title="Empress of Light" description="The best Boss Fight in terraria" btn_label="Go to" btn_Url="https://youtube.com" img_src="https://pbs.twimg.com/media/Ez0TAS_WEAAPJcP.jpg:large" />
					<Card title="BlackPink" description="Best Kpop Group ever!!!! <3" btn_label="Go to" btn_Url="https://www.youtube.com/watch?v=32si5cfrCNc&pp=ygUJYmxhY2twaW5r" img_src="https://cdn.kobo.com/book-images/522824ee-9411-4cde-89b4-ce5dedd2feeb/1200/1200/False/blackpink.jpg" />
					<Card title="Zoroak" description="Besto Pokimono" btn_label="Go to" btn_Url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8e8Kleo8SI2Rm6KrNdY0GsMfJlLHtyPa2g&s" img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8e8Kleo8SI2Rm6KrNdY0GsMfJlLHtyPa2g&s" />
				</div>
			</div>

		</div>
	);
};

export default Home;
