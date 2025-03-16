import React, { useState } from 'react';

const GuoduLearningComponent = () => {
  // 状态管理
  const [animationPhase, setAnimationPhase] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);
  const [activeSituation, setActiveSituation] = useState(0);
  
  // 过渡词汇数据
  const wordData = {
    word: '过渡',
    pinyin: 'guò dù',
    partOfSpeech: '名词/动词',
    meaning: '从一种状态到另一种状态的转变过程',
    
    collocations: [
      { word: '过渡时期', pinyin: 'guòdù shíqī', meaning: '过渡的一段时间', image: '/api/placeholder/80/80' },
      { word: '过渡阶段', pinyin: 'guòdù jiēduàn', meaning: '变化中的一个阶段', image: '/api/placeholder/80/80' },
      { word: '语言过渡', pinyin: 'yǔyán guòdù', meaning: '从一种语言到另一种语言的转变', image: '/api/placeholder/80/80' },
      { word: '自然过渡', pinyin: 'zìrán guòdù', meaning: '顺其自然的变化', image: '/api/placeholder/80/80' }
    ],
    
    examples: [
      {
        situation: '学习情境',
        sentences: [
          {
            sentence: '留学生需要一个语言过渡期来适应全中文环境。',
            pinyin: 'Liúxuéshēng xūyào yī gè yǔyán guòdù qī lái shìyìng quán zhōngwén huánjìng.',
            translation: 'International students need a language transition period to adapt to a fully Chinese environment.'
          },
          {
            sentence: '学校为新生安排了过渡课程，帮助他们适应大学生活。',
            pinyin: 'Xuéxiào wèi xīnshēng ānpái le guòdù kèchéng, bāngzhù tāmen shìyìng dàxué shēnghuó.',
            translation: 'The school arranged transition courses for new students to help them adapt to college life.'
          }
        ]
      },
      {
        situation: '自然情境',
        sentences: [
          {
            sentence: '春天是冬天和夏天的过渡季节。',
            pinyin: 'Chūntiān shì dōngtiān hé xiàtiān de guòdù jìjié.',
            translation: 'Spring is the transition season between winter and summer.'
          },
          {
            sentence: '黄昏是白天到黑夜的过渡时刻。',
            pinyin: 'Huánghūn shì báitiān dào hēiyè de guòdù shíkè.',
            translation: 'Dusk is the transition moment from day to night.'
          }
        ]
      },
      {
        situation: '生活情境',
        sentences: [
          {
            sentence: '搬到新城市需要一段过渡时间来适应。',
            pinyin: 'Bān dào xīn chéngshì xūyào yī duàn guòdù shíjiān lái shìyìng.',
            translation: 'Moving to a new city requires a transition period to adapt.'
          },
          {
            sentence: '放假回家后，我需要几天时间过渡到正常作息。',
            pinyin: 'Fàngjià huí jiā hòu, wǒ xūyào jǐ tiān shíjiān guòdù dào zhèngcháng zuòxí.',
            translation: 'After returning home for vacation, I need a few days to transition back to a normal schedule.'
          }
        ]
      }
    ]
  };

  // 处理动画相位改变
  const handleAnimationNext = () => {
    setAnimationPhase((prev) => (prev + 1) % 4);
  };

  // 处理情境切换
  const handleSituationChange = (index) => {
    setActiveSituation(index);
  };

  // 渲染视觉过渡动画
  const renderTransitionAnimation = () => {
    const phases = [
      { bgColor: '#e5f6fd', text: '冬天', color: '#3498db' },
      { bgColor: '#f0fff0', text: '春天 (过渡季节)', color: '#2ecc71' },
      { bgColor: '#fffacd', text: '夏天', color: '#f39c12' },
      { bgColor: '#fee', text: '秋天 (过渡季节)', color: '#e74c3c' }
    ];
    
    const currentPhase = phases[animationPhase];
    
    return (
      <div 
        className="relative w-full h-40 rounded-lg mb-4 flex items-center justify-center cursor-pointer transition-all duration-1000"
        style={{ backgroundColor: currentPhase.bgColor }}
        onClick={handleAnimationNext}
      >
        <div className="text-2xl font-bold" style={{ color: currentPhase.color }}>
          {currentPhase.text}
        </div>
        <div className="absolute bottom-2 text-sm text-gray-500">
          点击切换季节，体验"过渡"
        </div>
      </div>
    );
  };

  // 渲染渐变过渡可视化
  const renderGradientTransition = () => {
    return (
      <div className="w-full h-16 rounded-lg mb-4 relative">
        <div 
          className="w-full h-full rounded-lg"
          style={{ 
            background: 'linear-gradient(to right, #3498db, #2ecc71, #f39c12, #e74c3c)'
          }}
        >
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold">
          颜色过渡 (Color Transition)
        </div>
      </div>
    );
  };

  // 渲染桥梁过渡可视化
  const renderBridgeTransition = () => {
    return (
      <div className="w-full h-48 rounded-lg mb-4 relative bg-sky-100">
        <div className="absolute bottom-0 left-0 w-1/3 h-16 bg-green-500 rounded-tr-lg flex items-center justify-center text-white">
          初级汉语
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-16 bg-yellow-500 rounded-tl-lg flex items-center justify-center text-white">
          高级汉语
        </div>
        <div className="absolute bottom-8 left-1/3 w-1/3 h-8 bg-purple-500 flex items-center justify-center text-white">
          过渡 (guòdù)
        </div>
        <div className="absolute top-4 w-full text-center">
          <p className="text-gray-800 mb-1">学习汉语的过程</p>
          <p className="text-gray-600 text-sm">
            过渡就像一座桥梁，帮助你从初级水平进步到高级水平
          </p>
        </div>
      </div>
    );
  };

  // 渲染常用搭配
  const renderCollocations = () => {
    // 定义每个搭配的可视化组件
    const renderTimePeriod = () => (
      <div className="h-16 w-full relative rounded-lg overflow-hidden" style={{background: 'linear-gradient(to right, #8EC5FC, #E0C3FC, #FFFB7D)'}}>
        <div className="absolute top-0 left-0 h-full w-full">
          {/* 三个时期的圆圈指示器 */}
          <div className="h-full flex items-center justify-between px-6">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              </div>
              <span className="text-xs mt-1 font-medium">过去</span>
            </div>
            
            <div className="flex flex-col items-center relative">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center z-10">
                <div className="w-5 h-5 rounded-full bg-purple-600"></div>
              </div>
              <span className="text-xs mt-1 font-bold">过渡时期</span>
              {/* 下方进度条 */}
              <div className="absolute -bottom-7 w-full">
                <div className="h-1 bg-gray-300 w-full rounded-full">
                  <div className="h-1 bg-purple-600 w-1/2 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs mt-1 font-medium">未来</span>
            </div>
          </div>
          
          {/* 连接线 */}
          <div className="absolute top-8 left-0 w-full">
            <div className="h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
    );
    
    const renderStages = () => (
      <div className="h-20 w-full relative rounded-lg overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
        {/* 阶梯图形 */}
        <div className="absolute bottom-0 left-0 w-full h-full flex">
          <div className="w-1/3 h-full relative">
            <div className="absolute bottom-0 w-full h-1/3 bg-indigo-300 flex items-center justify-center">
              <span className="text-xs font-medium text-indigo-800">阶段一</span>
            </div>
          </div>
          
          <div className="w-1/3 h-full relative">
            <div className="absolute bottom-0 w-full h-2/3 bg-purple-400 flex items-center justify-center">
              <span className="text-xs font-bold text-white">过渡阶段</span>
            </div>
            {/* 阶梯指示箭头 */}
            <div className="absolute top-1/3 left-0 w-full flex justify-center">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
          
          <div className="w-1/3 h-full relative">
            <div className="absolute bottom-0 w-full h-full bg-indigo-500 flex items-center justify-center">
              <span className="text-xs font-medium text-white">阶段二</span>
            </div>
            {/* 阶梯指示箭头 */}
            <div className="absolute top-1/3 left-0 w-full flex justify-center">
              <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
    
    const renderLanguage = () => (
      <div className="h-16 w-full relative rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"></div>
        
        {/* 左侧英文 */}
        <div className="absolute top-0 left-0 h-full w-1/3 flex items-center justify-center">
          <div className="bg-blue-400 px-3 py-1 rounded-lg">
            <span className="text-sm font-bold text-white">English</span>
          </div>
        </div>
        
        {/* 右侧中文 */}
        <div className="absolute top-0 right-0 h-full w-1/3 flex items-center justify-center">
          <div className="bg-pink-400 px-3 py-1 rounded-lg">
            <span className="text-sm font-bold text-white">中文</span>
          </div>
        </div>
        
        {/* 连接线条 */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full">
          <div className="h-0.5 bg-gray-300 w-full"></div>
        </div>
        
        {/* 中间过渡，放在连接线后面以避免遮挡 */}
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center pointer-events-none">
          <div className="bg-purple-500 bg-opacity-90 px-4 py-1.5 rounded-lg shadow-md">
            <span className="text-sm font-bold text-white">语言过渡</span>
          </div>
        </div>
        
        {/* 过渡小点 */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-1/4 w-1/2 flex justify-between px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
        </div>
      </div>
    );
    
    const renderNatural = () => (
      <div className="h-16 w-full relative bg-gray-100 rounded-lg overflow-hidden">
        {/* 自然渐变效果，使用季节图标 */}
        <div style={{background: 'linear-gradient(to right, #FFD700, #FFA07A, #87CEFA, #FFFFFF)'}} 
             className="absolute top-0 left-0 h-full w-full">
        </div>
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-between px-4">
          <div className="flex flex-col items-center">
            <div className="text-xl">☀️</div>
            <div className="text-xs text-gray-800">夏</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl">🍂</div>
            <div className="text-xs text-gray-800">秋</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl">❄️</div>
            <div className="text-xs text-gray-800">冬</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl">🌱</div>
            <div className="text-xs text-gray-800">春</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center text-xs font-bold bg-white bg-opacity-50 py-1">
          自然过渡
        </div>
      </div>
    );
    
    return (
      <div className="mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">常用搭配</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-2 bg-white rounded-lg border border-gray-200">
            <div className="flex justify-between mb-2">
              <div>
                <p className="font-medium text-purple-800">过渡时期</p>
                {showPinyin && <p className="text-xs text-gray-600">guòdù shíqī</p>}
              </div>
              <p className="text-sm text-gray-700">过渡的一段时间</p>
            </div>
            {renderTimePeriod()}
          </div>
          
          <div className="p-2 bg-white rounded-lg border border-gray-200">
            <div className="flex justify-between mb-2">
              <div>
                <p className="font-medium text-purple-800">过渡阶段</p>
                {showPinyin && <p className="text-xs text-gray-600">guòdù jiēduàn</p>}
              </div>
              <p className="text-sm text-gray-700">变化中的一个阶段</p>
            </div>
            {renderStages()}
          </div>
          
          <div className="p-2 bg-white rounded-lg border border-gray-200">
            <div className="flex justify-between mb-2">
              <div>
                <p className="font-medium text-purple-800">语言过渡</p>
                {showPinyin && <p className="text-xs text-gray-600">yǔyán guòdù</p>}
              </div>
              <p className="text-sm text-gray-700">从一种语言到另一种语言的转变</p>
            </div>
            {renderLanguage()}
          </div>
          
          <div className="p-2 bg-white rounded-lg border border-gray-200">
            <div className="flex justify-between mb-2">
              <div>
                <p className="font-medium text-purple-800">自然过渡</p>
                {showPinyin && <p className="text-xs text-gray-600">zìrán guòdù</p>}
              </div>
              <p className="text-sm text-gray-700">顺其自然的变化</p>
            </div>
            {renderNatural()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-purple-800">
                {wordData.word}
                {showPinyin && <span className="ml-2 text-lg font-normal text-gray-600">({wordData.pinyin})</span>}
              </h1>
              <p className="text-lg text-gray-700 mt-1">从一种状态到另一种状态的转变过程</p>
            </div>
            
            <div className="flex space-x-4">
              <label className="flex items-center text-sm">
                <input 
                  type="checkbox" 
                  checked={showPinyin} 
                  onChange={() => setShowPinyin(!showPinyin)}
                  className="mr-1"
                />
                显示拼音
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="bg-purple-50 rounded-lg p-4 mb-4">
              <p className="text-lg"><span className="font-medium">词性：</span>{wordData.partOfSpeech}</p>
              <p className="text-lg"><span className="font-medium">释义：</span>{wordData.meaning}</p>
            </div>
            
            {/* 常用搭配 */}
            {renderCollocations()}
            
            {/* 可视化部分 */}
            <h2 className="text-xl font-semibold mb-3">夏天怎么过渡到冬天呢？</h2>
            {renderTransitionAnimation()}
            
            {/* 例句部分 */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">情境例句</h2>
              <div className="flex mb-3">
                {wordData.examples.map((example, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 mr-2 rounded-full text-sm ${
                      activeSituation === index 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => handleSituationChange(index)}
                  >
                    {example.situation}
                  </button>
                ))}
              </div>
              
              <div className="space-y-3">
                {wordData.examples[activeSituation].sentences.map((sentenceObj, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg">
                      {sentenceObj.sentence.split('过渡').map((part, i, arr) => 
                        i === arr.length - 1 ? part : 
                        <React.Fragment key={i}>
                          {part}<span className="text-purple-700 font-bold">过渡</span>
                        </React.Fragment>
                      )}
                    </p>
                    {showPinyin && (
                      <p className="text-sm text-gray-600 mt-1">
                        {sentenceObj.pinyin}
                      </p>
                    )}
                    <p className="text-sm text-gray-700 italic mt-1">
                      {sentenceObj.translation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>