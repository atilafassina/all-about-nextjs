import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

type CodeProps = {
  children: string
  className?: string
}

const Code = ({ children, className = 'language-jsx' }: CodeProps) => {
  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            margin: '1em 0',
            padding: '0.5em',
            borderRadius: '5px',
            overflow: 'auto',
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span
                style={{
                  textAlign: 'right',
                  paddingRight: '1em',
                  userSelect: 'none',
                  opacity: 0.5,
                }}
              >
                {i + 1}
              </span>
              <span>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
