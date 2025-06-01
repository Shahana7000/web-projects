document.addEventListener("DOMContentLoaded", () => {
    const pieces = document.querySelectorAll(".item1, .item2, .item7, .item8");
    let selectedPiece = null;

    pieces.forEach(piece => {
        piece.addEventListener("click", () => {
            if (selectedPiece) {
                selectedPiece.style.border = "none"; // Remove highlight from previous selection
            }
            selectedPiece = piece;
            selectedPiece.style.border = "2px solid red"; // Highlight selected piece
        });
    });

    document.querySelectorAll(".container div").forEach(cell => {
        cell.addEventListener("click", () => {
            if (selectedPiece && !cell.classList.contains("item1") && !cell.classList.contains("item2") && !cell.classList.contains("item7") && !cell.classList.contains("item8")) {
                cell.innerHTML = selectedPiece.innerHTML; // Move piece
                selectedPiece.innerHTML = ""; // Clear old position
                selectedPiece.style.border = "none"; // Remove highlight
                selectedPiece = null; // Reset selection
            }
        });
    });
});
