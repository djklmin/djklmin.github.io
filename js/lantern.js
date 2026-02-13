// ==================== 平安如意灯笼特效 ====================
(function() {
  // 固定4个灯笼，每个字：平、安、如、意
  const lanternWords = ['平', '安', '如', '意']
  
  // 创建灯笼样式
  const style = document.createElement('style')
  style.textContent = `
    .festival-lanterns {
      position: fixed;
      top: 20px;
      left: 0;
      right: 0;
      z-index: 9999;
      pointer-events: none;
      display: flex;
      justify-content: center;
      gap: 25px;
    }
    
    .lantern {
      position: relative;
      width: 70px;
      height: 100px;
      background: linear-gradient(145deg, #e63e3e, #c0392b);
      border-radius: 50% 50% 30% 30%;
      box-shadow: 0 15px 25px rgba(0,0,0,0.3), inset 0 -8px 15px rgba(0,0,0,0.3);
      animation: swing 3s ease-in-out infinite;
      transform-origin: top center;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #f1c40f;
    }
    
    /* 灯笼穗 */
    .lantern::before {
      content: '';
      position: absolute;
      bottom: -10px;
      width: 20px;
      height: 15px;
      background: #f1c40f;
      border-radius: 0 0 10px 10px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    /* 灯笼提手 */
    .lantern::after {
      content: '';
      position: absolute;
      top: -8px;
      width: 40px;
      height: 8px;
      background: #d4a017;
      border-radius: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    /* 灯笼上的字 */
    .lantern-word {
      color: #f1c40f;
      font-size: 36px;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      font-family: 'KaiTi', '华文楷体', 'Microsoft YaHei', serif;
      z-index: 2;
    }
    
    /* 灯笼装饰线条 */
    .lantern-line {
      position: absolute;
      width: 60px;
      height: 2px;
      background: rgba(241, 196, 15, 0.3);
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
    }
    
    .lantern-line2 {
      position: absolute;
      height: 60px;
      width: 2px;
      background: rgba(241, 196, 15, 0.3);
      left: 50%;
      top: 5px;
      transform: translateX(-50%);
    }
    
    /* 灯笼序号 */
    .lantern-number {
      position: absolute;
      bottom: -25px;
      color: #f1c40f;
      font-size: 14px;
      font-weight: bold;
      text-shadow: 1px 1px 2px #000;
    }
    
    /* 摆动动画 */
    @keyframes swing {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(5deg); }
      75% { transform: rotate(-5deg); }
    }
    
    /* 第二个灯笼延迟 */
    .lantern:nth-child(2) { animation-delay: 0.2s; }
    .lantern:nth-child(3) { animation-delay: 0.4s; }
    .lantern:nth-child(4) { animation-delay: 0.6s; }
    
    /* 移动端适配 */
    @media (max-width: 768px) {
      .festival-lanterns {
        gap: 10px;
        top: 10px;
      }
      .lantern {
        width: 45px;
        height: 65px;
      }
      .lantern-word {
        font-size: 24px;
      }
    }
  `
  document.head.appendChild(style)
  
  // 创建灯笼容器
  const lanternContainer = document.createElement('div')
  lanternContainer.className = 'festival-lanterns'
  
  // 生成4个灯笼
  lanternWords.forEach((word, index) => {
    const lantern = document.createElement('div')
    lantern.className = 'lantern'
    
    // 添加装饰线条
    const line1 = document.createElement('div')
    line1.className = 'lantern-line'
    const line2 = document.createElement('div')
    line2.className = 'lantern-line2'
    
    // 添加文字
    const wordSpan = document.createElement('span')
    wordSpan.className = 'lantern-word'
    wordSpan.textContent = word
    
    // 添加序号（可去掉，这里只是标识）
    const numberSpan = document.createElement('div')
    numberSpan.className = 'lantern-number'
    numberSpan.textContent = index + 1
    
    lantern.appendChild(line1)
    lantern.appendChild(line2)
    lantern.appendChild(wordSpan)
    // lantern.appendChild(numberSpan)  // 想要序号就取消这行注释
    
    lanternContainer.appendChild(lantern)
  })
  
  // 添加到页面
  document.body.appendChild(lanternContainer)
  
  // 显示节日提示
  setTimeout(() => {
    if (window.btf && btf.snackbarShow) {
      btf.snackbarShow('🏮 平安如意 🏮')
    }
  }, 1500)
})()