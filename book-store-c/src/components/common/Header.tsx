import { styled } from "styled-components";
import ThemeSwitcher from "../header/ThemeSwitcher";
import logo from "../../assets/images/logo.png";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Category } from "../../models/category.model";
import { useEffect, useState } from "react";
import { fetchCategory } from "../../api/category.api";

function Header() {
const [category, setCategory] = useState<Category[]>([]);

useEffect( () => {
  fetchCategory().then((category) => setCategory(category));
} ,[])

  return (
    <HeaderStyle>
      <h1 className="logo">
        <img src={logo} alt="book store" />
      </h1>
      <nav className="catagory">
        <ul>
          {category.map((item) => (
            <li key={item.id}>
              <Link to={`/books?category_id=${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <ul>
          <li>
            <Link to="/login">
              <FaSignInAlt/>로그인</Link>
          </li>
          <li>
            <Link to="/signup">
            <FaRegUser/>회원가입</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 200px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        a {
          font-size: 1rem;
          font-weight: 680;
          text-decoration: none;
          display: flex;
          align-item: center;
          line-height: 1;

          svg{
            margin-right: 6px;
          }
        }
      }
    }
  }
`;

export default Header;
