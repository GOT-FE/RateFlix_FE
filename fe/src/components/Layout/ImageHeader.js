/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const ImageHeader = (props) => {
  const image = props.image;
  const movie = props.movie;
  const imgHeaderStyles = css`
    position: fixed;
    width: 100%;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 10;

    h1 {
      color: white;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `;
  const loginoutButtonStyles = css`
    background: none;
    /* background-color: white; */
    color: white;
    margin: 0 5px;
    border: none;

    :hover {
      background: none;
      color: #cccccc;
      border: none;
    }
  `;
  const registerButtonStyles = css`
    background: none;
    /* background-color: white; */
    color: white;
    margin: 0 5px;
    border-color: white;

    :hover {
      /* background-color: white; */
      background: none;
      color: #cccccc;
      border-color: #cccccc;
    }
  `;
  const containerStyles = css`
    border-bottom: 1px solid #cccccc;
    position: relative;

    height: 30rem;
    background-image: url(${image});
    background-size: cover; /* 이미지를 가로로 꽉 차게 설정 */
    background-position: center; /* 이미지 중앙 정렬 */
  `;
  const underLineStyles = css`
    text-decoration: none;
  `;
  const iconContainer = css`
    display: flex;
    align-items: center;
  `;

  const iconStyles = css`
    font-size: 1.5em;
    margin-left: 5px;
    color: white;
  `;
  const textStyles = css`
    position: absolute; /* 절대적 위치 지정 */
    bottom: 30px; /* 하단에 위치 */
    color: white; /* 글자 색상 */
    padding: 0 10%;
  `;
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  console.log(movie);
  return (
    <div css={containerStyles}>
      <header css={imgHeaderStyles}>
        <Link to="/" css={underLineStyles}>
          <h1>RateFlix</h1>
        </Link>
        {!isAuth && (
          <nav>
            <ul>
              <li>
                <Link to="/login">
                  <button css={loginoutButtonStyles}>로그인</button>
                </Link>
                <Link to="/register">
                  <button css={registerButtonStyles}>회원가입</button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
        {isAuth && (
          <nav>
            <ul>
              <li css={iconContainer}>
                <button css={loginoutButtonStyles} onClick={logoutHandler}>
                  로그아웃
                </button>
                <FaUserCircle css={iconStyles} />
              </li>
            </ul>
          </nav>
        )}
      </header>
      <div css={textStyles}>
        {/* 조금 더 크게 설정 필요 */}
        <h1>{movie.title}</h1>
        {/* padding 줄이기 */}
        <h4>
          {movie.year} • {movie.genre} • {movie.country}
        </h4>
        <h4>{movie.runningTime}분</h4>
      </div>
    </div>
  );
};

export default ImageHeader;