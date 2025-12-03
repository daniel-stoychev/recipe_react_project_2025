import { useNavigate } from "react-router"


export function deleteClickHandler(recipeId) {
    const navigate = useNavigate();
    fetch(`http://localhost:3030/jsonstore/recipes/${recipeId}`, {
        method: 'DELETE'
    }).catch(err => alert(err.message))
    navigate('/');
}   