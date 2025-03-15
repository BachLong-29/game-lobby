"use client";

import "@/styles/game.scss";

import { useEffect, useState } from "react";

const gamesData = [
  { id: 1, name: "The Legend of Zelda" },
  { id: 2, name: "Super Mario Odyssey" },
  { id: 3, name: "Minecraft" },
  { id: 4, name: "Fortnite" },
  { id: 5, name: "Cyberpunk 2077" },
  { id: 6, name: "The Witcher 3" },
  { id: 7, name: "Grand Theft Auto V" },
  { id: 8, name: "Among Us" },
];

interface IProps {
  category: string;
}

const ListGame = (props: IProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState(gamesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleSearch = () => {
    const filtered = gamesData.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  useEffect(() => {
    const handler = setTimeout(handleSearch, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredGames.length / pageSize);
  const currentGames = filteredGames.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="game-list">
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <select
        value={pageSize}
        onChange={handlePageSizeChange}
        className="page-size-select"
      >
        {[5, 10, 15].map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {currentGames.map((game) => (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>{game.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListGame;
