import * as React from 'react'

interface ExampleProps {
  /** 表示するテキスト */
  text: string
  /**
   * true: テキスト表示 false: テキスト非表示
   * @default false
   */
  flag?: boolean
  /** ボタンを押した時のイベントハンドラ */
  action(): void
}

const Example: React.ReactNode = (props: ExampleProps) => {
  const { text, flag, action } = props
  const [count, countChg] = React.useState(0)
  const countUp = React.useCallback(() => countChg(prev => prev + 1), [])
  const countDown = React.useCallback(() => countChg(prev => prev - 1), [])

  return (
    <div>
      {flag && <p>{text}</p>}
      <button onClick={action}>ボタン</button>
      <p>count:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  )
}

export default Example
