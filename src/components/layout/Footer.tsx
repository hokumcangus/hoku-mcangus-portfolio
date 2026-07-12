import { storyContent } from "../../data/storyContent"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <p>
          © {new Date().getFullYear()} Hoku McAngus. {storyContent.connect.footer}
        </p>
      </div>
    </footer>
  )
}

export default Footer
