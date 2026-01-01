export interface ReviewItem {
  id: string;
  image: string;
  qa: { question: string; answer: string }[];
}

export const reviewsData: ReviewItem[] = [
  {
    id: 'review104',
    image: '/reviews/review104.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "最高です！今日もワクワクしながら受講させていただきました。AIを使っているほうだと思ってましたが、まだまだだなと痛感させられました。"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "①Deep ReseachとWeb検索の使い分け、②Gensparkの可能性"
      }
    ]
  },
  {
    id: 'review103',
    image: '/reviews/review103.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "セミナーありがとうございました。とても勉強になりました。そして、今回はワークを多く取り入れて頂いたので、より一層理解が深まりました。ありがとうございます。「DeepResearch」は何度か使った事がありましたが、「Web検索機能」は使用した事がありませんでした。早速、使用していきたいと思います。"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "「Genspark」凄すぎて、前回の「NotebookLM」でも驚きだったのですが、AIの進化が凄すぎますね。ここで学ぶことができて本当に良かったです。\nせっかく学んだので、どんどん使用していきたいと思います。"
      }
    ]
  },
  {
    id: 'review102',
    image: '/reviews/review102.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "実演があってとても良かったです。新しい機能を教えていただきとても勉強になりました。"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "Gensparkの機能は知らなかったので、驚いております。エンジニアでなくてもアプリが簡単にできるようになったのですね。"
      }
    ]
  },
  {
    id: 'review101',
    image: '/reviews/review101.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "速度重視のWeb検索、深掘りのDeep Research、さらにエージェント型のGensparkという三層構造がクリアに理解できました。"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "Deep Researchはこれまでも使っていたが、今回の内容で「どんな調査を任せると最も効果を発揮するか」を改めて整理できた点が良かったです。\nまた、Gensparkについてはこれまで一部の機能しか把握していませんでしたが、LP制作・資料作成・簡易アプリ開発など、業務での活用イメージの幅が大きく広がりました。"
      }
    ]
  },
  {
    id: 'review100',
    image: '/reviews/review100.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "盛りだくさんでしたが学びが深い"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "Genspark"
      }
    ]
  },
  {
    id: 'review99',
    image: '/reviews/review99.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "WEB検索、DEEPRESERCH、Gensparkを使用することができ可能性を感じた。どんどんできることが広がっており、試してみようと思っているうちに変化してしまいますね。"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "Deepリサーチは企業や市場の分析に欠かせないものになりそう。AIを使えばYahoo知恵袋の声集めも非常に効率的にできることがわかった。"
      }
    ]
  },
  {
    id: 'review98',
    image: '/reviews/review98.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "楽しかったので時間が短く感じました。\n仕事に活用したいけど、すぐに思いつかないので、内容整理が必要です。。。"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "gensparkは仕事で活用したいと思います。もっと深堀してほしいです。"
      }
    ]
  },
  {
    id: 'review97',
    image: '/reviews/review97.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "deep researchは試しに使ってみただけで活用しているとは言い難い状況だったので、新たな使い方を教えて頂いたので、毎月使い切るくらいやり倒そうと思います。"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "書籍の要約、読んだ本を再度思い出すことが出来て、意識に定着させやすくなると思いました。"
      }
    ]
  },
  {
    id: 'review96',
    image: '/reviews/review96.png',
    qa: [
      {
        question: "今日の感想はどうでしたか？",
        answer: "非常に興味ある内容でした。ビデオを見直して対応を考えたいと思います。"
      },
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "Gensparkを使ってみたいです"
      }
    ]
  },
  {
    id: 'review95',
    image: '/reviews/review95.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "Note Book LMのお話が役にも立ちましたし、印象も強かったです。「手元の資料に特化した回答を行う」というのは、ChatGPT(のプロジェクト)にできない痒いところに手がガッツリ届いたという印象で、「自分が何をしたいか」という目的さえハッキリしていればハルシネーション(ほぼ)なしという事なので、資料の内容を理解してなくても自分の目的に沿った回答を導き出せることが確定した、と感じました。\n\nChatGPTで資料を用いた壁打ちは既に良い感じなので、特化するかどうかで上手く棲み分けできそうなイメージです。これから触ってみます。\n\nちなみにYouTubeを資料として扱える事にもシンプルに驚いてます。動画を見なくても内容が分かるとは、、。\n\nあとは、質疑応答が良かったです。自分と異なる角度の質問が理解の補足に繋がってとても助かりました。"
      }
    ]
  },
    {
    id: 'review94',
    image: '/reviews/review94.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "NotebookLMやChatGPTのプロジェクト機能を活用し、営業資料・顧客データ・提案履歴を一元管理してAIに参照させることで、精度の高い提案作成や壁打ちが可能になると感じました。"
      },
    ]
  },
  {
    id: 'review93',
    image: '/reviews/review93.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "「NotebookLMの活⽤方法」が特に役立ちました｡活用例で出して頂いたものは、全てすぐにでも使用できそうです。"
      },
    ]
  },
  {
    id: 'review92',
    image: '/reviews/review92.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "「ChatGPTにおける、プロジェクトの具体的な使い方」が特に役に立ちました。◯◯◯を使用しての応用は非常に有益になりそうです！"
      },
    ]
  },
  {
    id: 'review91',
    image: '/reviews/review91.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "NotebookLMについて詳しく知れたことがよかったです。自分のナレッジなどを蓄積して自己の振り返りや棚卸に役立てたいと思いました。"
      },
    ]
  },
  {
    id: 'review90',
    image: '/reviews/review90.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "NotebookLMの名前を聞いた事はありましたが、どんなものかは知りませんでした。今回は知りたい事を知る事が出来て良かったです。ChatGPTと似ている所があるのですね。"
      },
    ]
  },
  {
    id: 'review89',
    image: '/reviews/review89.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "NotebookLMの使い方のヒントを知れてとても為になりました。社内の採用を進めていかなければならないので先ずは採用をキーワードにナレッジ集めをしようと思います。\n厚生労働省が出している助成金の事をちらっとお話されていましたが、今の仕事に生かせないか？と調べてみようと思います。"
      },
    ]
  },
  {
    id: 'review88',
    image: '/reviews/review88.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "NotebookLMは社内の技術情報検索やCADシステムのトラブルシューティングに生かせそう"
      },
    ]
  },
  {
    id: 'review87',
    image: '/reviews/review87.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "Notebook LMについて実際に演習で触ってみて、ここまで出来るのすごいと思いました。特に動画作成の質が高くそのままYouTubeに公開出来るレベルだと思いました"
      },
    ]
  },
  {
    id: 'review86',
    image: '/reviews/review86.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "NotebookLMの機能とその使い方、が非常に業務に役立てられそうだと感じた点と、効率化に活かせそうだと感じました。セキュリティ面も高いため、社内資料を格納して、分析などに使用したいと思います。"
      },
    ]
  },
  {
    id: 'review85',
    image: '/reviews/review85.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "NotebookLMで学習内容を纏めれれそうなのが活用できそう。現在消化中の内容は混乱しがち＆英語学習にフラッシュカードを使いたいです。"
      },
    ]
  },
  {
    id: 'review84',
    image: '/reviews/review84.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "ナレッジの情報集めに困っていたのでNotebookLMを使った情報収集の方法は大変参考になりました。"
      },
    ]
  },
  {
    id: 'review83',
    image: '/reviews/review83.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "「採用に関する利用方法と、初見だったNotebookLMについて」が特に役立ちました｡"
      },
    ]
  },
  {
    id: 'review82',
    image: '/reviews/review82.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "NotebookLM これはありがたいです。"
      },
    ]
  },
  {
    id: 'review81',
    image: '/reviews/review81.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "youtube文字起こしからの情報整理、notebookLMの使い方が特に役立ちました｡"
      },
    ]
  },
  {
    id: 'review80',
    image: '/reviews/review80.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "プロジェクト機能・NotebookLMについて。精度高く情報を整理でき、ナレッジを強化していくことができることが、実践方法も交えて教えていただき、非常に勉強になりました。"
      },
    ]
  },
  {
    id: 'review79',
    image: '/reviews/review79.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "AI活用は単なる便利ツールの域を超え、業務の進め方そのものを変革する可能性を強く感じました。\n特に「MyGPT」を作るプロセスは、プロンプトを調整しながら業務に最適化していく試行錯誤の重要性を実感でき、応用の幅広さに驚かされました"
      },
    ]
  },
  {
    id: 'review78',
    image: '/reviews/review78.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "誤字脱字や契約書に関しては、今の本業が士業なので役に立ちました。基本的な使い方は間違っていなかったので安心しました（笑）"
      },
    ]
  },
  {
    id: 'review77',
    image: '/reviews/review77.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "既に情報があれば、人はいらないと思うくらいのAIの進歩を感じました。Youtubeなどからテキスト化してマイGPTが作れるところは色々と手を動かして作ってみようと思いました。"
      },
    ]
  },
  {
    id: 'review76',
    image: '/reviews/review76.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "「マイGTPの作成方法」が特に役立ちました｡実践形式で教えて頂いたので、まずは「やってみよう」と思えた事が有り難かった。\n今回の研修で学習しなければ、触っていなかったと思うし、どんどん時代から取り残されてしまったと思う。また来月の講義も楽しみにしております。"
      },
    ]
  },
  {
    id: 'review75',
    image: '/reviews/review75.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "マイGPTの作成方法が具体的に分かり大変良かったです。特に小口清算（領収書データ）をいただけたのは衝撃でした。試行錯誤がいろいろあったものと想像します。この中の##制約条件をマネすることにより、かなり応用が利きそうです。ありがとうございます。"
      },
    ]
  },
  {
    id: 'review74',
    image: '/reviews/review74.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "ChatGPT Plusを契約して日常的に使用していますが、細かい機能（検索強化ひとつにしても）を全く活用できていませんでした。とても具体的に教えていただけ、大変ありがたかったです。\nまた、マイGPTのナレッジのコツもとても参考になりました！"
      },
    ]
  },
  {
    id: 'review73',
    image: '/reviews/review73.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "盛り沢山の内容で情報が頭の中で処理出来ておりません。AI関連で知っておきたい用語についてのお話は、ためになりました。具体的に作業してくださったので、後で見返した時、今は無料版の利用ですが課金しても設定出来そうな気がしました。大見出しが#で小見出しが＃＃というのも知りませんでしたので、覚えます。"
      },
    ]
  },
  {
    id: 'review72',
    image: '/reviews/review72.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "マイGPTの作り方が大変参考になりました、また、画像生成の指定で「シード値を固定で」という指定ができたことは発見でした。"
      },
    ]
  },
  {
    id: 'review71',
    image: '/reviews/review71.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "非常に役に立ちました。読み終わった書籍をAIのDeepSearch機能で要約してもらいましたが、ポイントを突いたものが出てきました。ものすごく役に立ちそうです。"
      },
    ]
  },
  {
    id: 'review70',
    image: '/reviews/review70.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "マイGPTの実例が多くてわかりやすかった｡ナレッジDBを作れそう｡画像が作成できる"
      },
    ]
  },
  {
    id: 'review69',
    image: '/reviews/review69.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "私のAI活用方法やプロンプト、注意点などが基本的に間違っていなかった事が確認出来たことです。"
      },
    ]
  },
  {
    id: 'review68',
    image: '/reviews/review68.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "復習しながらですが、シチュ丸が本当にすごいです。プロンプトでここまで違うと思いませんでした。凄すぎます。"
      },
      {
        question: "逆に「もっと知りたかった」「わかりにくかった」点があれば教えてください",
        answer: "あまりないです。丁寧すぎたかなくらいです。"
      },
    ]
  },
  {
    id: 'review67',
    image: '/reviews/review67.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "薬膳シチューのプロンプトの話\nセキュリティーの話"
      },
      {
        question: "逆に「もっと知りたかった」「わかりにくかった」点があれば教えてください",
        answer: "今回は特にありませんでした\n槙さんの優しい口調とテンポ感が個人的に癒しでした"
      },
    ]
  },
  {
    id: 'review66',
    image: '/reviews/review66.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "やはりプロンプトが大事ということ\n薬膳シチュー"
      },
    ]
  },
  {
    id: 'review65',
    image: '/reviews/review65.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "よくない使い方・効果的な使い方の両方の視点で理解できたのがよかったと思います。"
      },
    ]
  },
  {
    id: 'review64',
    image: '/reviews/review64.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "・どの分野にどのようなニュアンスで使えるのか？が、具体的に分かって助かりました\n(法務、Webサイト、課題解決、問題対応 etc…)\n・AI活用コンサルタントを具体的に利用するためのプロンプトを教えてもらえた点\n(新しい選択肢が1つ増えました。ありがとうございます！)"
      },
    ]
  },
  {
    id: 'review63',
    image: '/reviews/review63.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "・ある長文の記事を、自分のテーマに変えて作り変えてもらう。\n・３C分析・・・具体的な競合と自社について。かなりの詳細が出る。※参照元のURLも出る。\n・プロンプトのフォーマットや「しちゅまる」\n等々。。\nとても実践的で、非常に参考になりました！！"
      },
      {
        question: "逆に「もっと知りたかった」「わかりにくかった」点があれば教えてください",
        answer: "全体的に、とても分かりやすくとても有益でした。次回以降もとても楽しみにしています。どうもありがとうございました！！"
      },
    ]
  },
  {
    id: 'review62',
    image: '/reviews/review62.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "プロンプトを生成するプロンプトはとてもありがたいです。AIとの壁打ちのヒントにさせていただきます。"
      },
    ]
  },
  {
    id: 'review61',
    image: '/reviews/review61.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "AIの活用を実演を踏まえてご説明いただいた点"
      },
    ]
  },
  {
    id: 'review60',
    image: '/reviews/review60.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "コンサル級の分析もしてくれるという点は改めて戦慄しました。\nそういうことをしてくれるようなマイGPTにチューンアップしていくことの大切さを学ぶことができました。\n自分のノウハウをどのように言語化するか、考えを深めていきたいと思います。言語化がネックなんだよな、と思ったところもありましたが、うまく言語化できていない知識・スキルについても、AIの力を借りれば容易に言語化できそうですね。\nありがとうございました。"
      },
    ]
  },
  {
    id: 'review59',
    image: '/reviews/review59.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "業務上役立つアイデアをAI自身が考えて、提案させる、という内容が非常に役立つと感じました。さっそく、提案してもらいました。色々提案をいただいたのですが、効果が高いTOP3に絞り、それについて検討したいと思います。まだ内容をよく見れていないため、夏季休暇明けに、対応したいと思っています。"
      },
      {
        question: "逆に「もっと知りたかった」「わかりにくかった」点があれば教えてください",
        answer: "ゆっくりと、丁寧に話をしてくれたので、よく理解できました。多くの方（主には経営層や決裁権者）の前で講演したデータをもとに、今回の話の構成や話し方、伝え方を考えられたのだと感じました。とても参考になりました。"
      },
    ]
  },
  {
    id: 'review58',
    image: '/reviews/review58.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "実際のAI活用というところで、noteの長文作成など具体例を色々紹介してくださりAI活用のイメージができました。"
      },
    ]
  },
  {
    id: 'review57',
    image: '/reviews/review57.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "薬膳シチューの実践方法"
      },
      {
        question: "逆に「もっと知りたかった」「わかりにくかった」点があれば教えてください",
        answer: "特になし。（分かりやすかったですし、今の内容でお腹いっぱいです。。。）"
      },
    ]
  },
  {
    id: 'review56',
    image: '/reviews/review56.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "生成aiを更に使いこなすテクニックがわかった"
      },
    ]
  },
  {
    id: 'review55',
    image: '/reviews/review55.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "薬膳シチュー"
      },
    ]
  },
  {
    id: 'review54',
    image: '/reviews/review54.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "プロンプトの書き方により、GPTの回答が使えるものになるかどうかが決まるということがわかりました。（適当プロンプト → 薬膳シチューを使ったプロンプト）　プロンプトの書き方を学べて良かったです。"
      },
    ]
  },
  {
    id: 'review53',
    image: '/reviews/review53.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "業務ノウハウ流出防止の守りのプロンプト"
      },
    ]
  },
  {
    id: 'review52',
    image: '/reviews/review52.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "薬膳シチューはとても便利で実用的だと思います"
      },
    ]
  },
  {
    id: 'review51',
    image: '/reviews/review51.png',
    qa: [
      {
        question: "特に「役立った」「印象に残った」点を簡単に教えてください。",
        answer: "プログラム型プロンプトは初めて知りました。"
      },
    ]
  },
  {
    id: 'review50',
    image: '/reviews/review50.png',
    qa: [
      {
        question: "感想",
        answer: "普段から調べ事はじめ、何か購入する際にもチャットGPTを利用するようになりました。\nもう友達感がだいぶ出てきて頼もしい相棒でもあります。"
      },
    ]
  },
  {
    id: 'review49',
    image: '/reviews/review49.png',
    qa: [
      {
        question: "感想",
        answer: "AIの使い方がこんなにもあるんだなーと。\nchatGPTくらいしか使っていないのでいろいろ知れて勉強になります。"
      },
    ]
  },
  {
    id: 'review48',
    image: '/reviews/review48.png',
    qa: [
      {
        question: "感想",
        answer: "今回は AIが作る文章に自分の熱量を吹き込むという点において、非常にためになったと思います。いままではAIの書いた文章が結構よかったので、そのままメールで出したり、提案をそのまま出したり、ブログの記事にしたりしていたが、大いに反省。キチンと自分の息吹を入れたいと思う。\n思うにAIが出る前はコタツ記事がはびこり、インターネット検索でも自分が欲しい、一次情報にたどり着けないもどかしさがあった。AI時代になり、今までより安価に記事を生成できるようになったので、自社の発表する記事、ホームページではそのようなことが無い一次情報をできるだけ掲載するようにしたい。"
      },
    ]
  },
  {
    id: 'review47',
    image: '/reviews/review47.png',
    qa: [
      {
        question: "感想",
        answer: "生成AIを社内に導入する際の、社員のモチベーションが下がらないような伝え方、進め方が勉強になりました"
      },
    ]
  },
  {
    id: 'review46',
    image: '/reviews/review46.png',
    qa: [
      {
        question: "感想",
        answer: "今回のchatGPTで、ごちゃごちゃの部屋の画像を、綺麗に片付けた画像に生成してくれるのには、正直驚きました。"
      },
    ]
  },
  {
    id: 'review45',
    image: '/reviews/review45.png',
    qa: [
      {
        question: "感想",
        answer: "（AIで）LPの改善ができる仕組みが構築されているのが特に感動しました"
      },
    ]
  },
  {
    id: 'review44',
    image: '/reviews/review44.png',
    qa: [
      {
        question: "感想",
        answer: "いつもありがとうございます。\n今回はAIの凄さを体感しました。\n学習させて、プロンプトをしっかり指示させると、ここまでできるんだ、という事に単純に驚きました。"
      },
    ]
  },
  {
    id: 'review43',
    image: '/reviews/review43.png',
    qa: [
      {
        question: "感想",
        answer: "自分もGPTsをよく使っているのですが、なかなかLP作成で使えるレベルにはなってないので、今回の講義を参考にブラッシュアップできればと思います"
      },
    ]
  },
  {
    id: 'review42',
    image: '/reviews/review42.png',
    qa: [
      {
        question: "感想",
        answer: "AIについては多少知識を持っていたつもりでしたが、「AIで検索」という感覚はありませんでした。これが聞けただけでも私にとってものすごい価値があります。\nこんな風に「いかにして行動に結びつけるか」を具体的に表現していただけると、私としてはとても助かります。"
      },
    ]
  },
  {
    id: 'review41',
    image: '/reviews/review41.png',
    qa: [
      {
        question: "感想",
        answer: "GPTsの使用や丁寧に文章を書くという意識はあったのですが、出力を安定させるための定型を教えていだけたのがありがたかったです。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "ランディングページの改善など"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "メール作成、誤字脱字含め庶務で使えると思います"
      },
    ]
  },
  {
    id: 'review40',
    image: '/reviews/review40.png',
    qa: [
      {
        question: "感想",
        answer: "生成AIを活用するために何をすればいいのかと漠然としていた疑問が明確になった"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "施工計画書や手順書や安全書類をはじめとする工事に関わる書類の作成、ホームページ作成、顧客管理や分析、経営分析"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "施工計画書や手順書や安全書類をはじめとする工事に関わる書類の作成、ホームページ作成"
      },
    ]
  },
  {
    id: 'review39',
    image: '/reviews/review39.png',
    qa: [
      {
        question: "感想",
        answer: "AIについて詳しく教えていただいたのが初めてなので分からないことも多かったが比較的分かりやすく説明してくれたのでよかったです。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "製図したり、分からない事を聞いたりしたい"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "製図、作業手順作成"
      },
    ]
  },
  {
    id: 'review38',
    image: '/reviews/review38.png',
    qa: [
      {
        question: "感想",
        answer: "プロンプトで細かく入力しないといけないなど、初めて知ることが出来て満足"
      },
    ]
  },
  {
    id: 'review37',
    image: '/reviews/review37.png',
    qa: [
      {
        question: "感想",
        answer: "知らない情報がたくさん理解できた。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "資料作成"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "資料作成、マニュアル作成"
      },
    ]
  },
  {
    id: 'review36',
    image: '/reviews/review36.png',
    qa: [
      {
        question: "感想",
        answer: "AIについてベーシックな部分を学べた"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "ポスター作成、議事録、院内業務のスリム化、文章チェック"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "ポスター作成、議事録、院内業務のスリム化、文章チェック"
      },
    ]
  },
  {
    id: 'review35',
    image: '/reviews/review35.png',
    qa: [
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "SNS投稿作成や記事制作・校正など、多岐にわたって使用できると思いました。"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "コンテンツ制作や、情報収集などでAIに質問する業務ではハルシネーションを防ぎたいため、今回学んだことを活用できると感じました。"
      },
    ]
  },
  {
    id: 'review34',
    image: '/reviews/review34.png',
    qa: [
      {
        question: "感想",
        answer: "具体的な使い方などを教えていただいたので自分でもより使いこなせそうだと感じた"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "ライター、マーケティング、SNS運用代行"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "マニュアル作成　ボット作成"
      },
    ]
  },
  {
    id: 'review33',
    image: '/reviews/review33.png',
    qa: [
      {
        question: "感想",
        answer: "実務に近い内容で満足です"
      },
    ]
  },
  {
    id: 'review32',
    image: '/reviews/review32.png',
    qa: [
      {
        question: "感想",
        answer: "非常に具体的で、わかりやすかった。ボリュームがあり、実際の使用例も参考になった。"
      },
    ]
  },
  {
    id: 'review31',
    image: '/reviews/review31.png',
    qa: [
      {
        question: "感想",
        answer: "実務に活かせる内容が多く、すぐに試してみたくなるプロンプトの解説ばかりでした。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "補助金事業計画書の構成案の作成、入札参加資格の顧客別スケジュール管理等"
      },
    ]
  },
  {
    id: 'review30',
    image: '/reviews/review30.png',
    qa: [
      {
        question: "感想",
        answer: "具体的でかつすぐに実践できることと、考え方の両方がバランスよく構成されていました。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "動画やイラストの作成、医師に対するマニュアルの作成、事業計画書、プレゼン資料、経理、よくある質問などの精度アップなど"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "現在YouTubeの編集や記事の作成などに時間がかかっているので、それらはすぐに取り組んでみたいです。あとは経理の入力を簡略化したいです。事業計画や腸内細菌の把握なども取り組みたいです"
      },
    ]
  },
  {
    id: 'review29',
    image: '/reviews/review29.png',
    qa: [
      {
        question: "感想",
        answer: "壁打ちではなく、プロンプトの効率性にとても気づきがありました。実践してみたいと思います。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "営業の提案準備、ロールプレイの相手をはじめとした営業活動のすべてで、活用できるところを考えていきたいと思います。"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "サービス活用のデモ、顧客向けに提供するサービスをアレンジすること、提案資料の作成など"
      },
    ]
  },
  {
    id: 'review28',
    image: '/reviews/review28.png',
    qa: [
      {
        question: "感想",
        answer: "それぞれのパートがとてもわかりやすかったです"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "セミナー、コンサル"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "セミナー企画"
      },
    ]
  },
  {
    id: 'review27',
    image: '/reviews/review27.png',
    qa: [
      {
        question: "感想",
        answer: "改めてプロンプトの内容整理、セキュリティ、活用などとても参加になりました"
      },
    ]
  },
  {
    id: 'review26',
    image: '/reviews/review26.png',
    qa: [
      {
        question: "感想",
        answer: "わかりやすかった\n使ってみたいと思えた\n技術では無い事がわかった"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "PR資料作り　自己紹介　今日教わった物使ってみたい"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "作業の時短　　悩むより答えが早い\n色々もろもろ使える❤️"
      },
    ]
  },
  {
    id: 'review25',
    image: '/reviews/review25.png',
    qa: [
      {
        question: "感想",
        answer: "業務効率化に繋がるノウハウを習得できた"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "CAE 、議事録作成などの定型作業"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "CAEの計算時間短縮"
      },
    ]
  },
  {
    id: 'review24',
    image: '/reviews/review24.png',
    qa: [
      {
        question: "感想",
        answer: "AIの凄さがわかった。コンピュータのことがわからなくても日本語を駆使できたら使うことができることがわかり、私でも勉強したいと思いました。"
      },
    ]
  },
  {
    id: 'review23',
    image: '/reviews/review23.png',
    qa: [
      {
        question: "感想",
        answer: "プロンプト重要性をわかりやすく説明されていた。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "ＡＩを使った、新しいビジネスを展開に活用したい。"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "GPTｓの活用で時間短縮になる事が理解できたのでGPTs作成を進めたい。"
      },
    ]
  },
  {
    id: 'review22',
    image: '/reviews/review22.png',
    qa: [
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "教育用マニュアルの作成、製品取扱説明書の作成等。"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "総務全般、メールや契約書のひな型作成等。"
      },
    ]
  },
  {
    id: 'review21',
    image: '/reviews/review21.png',
    qa: [
      {
        question: "感想",
        answer: "#の設定条件の多さ、詳細に簡潔にプロンプト作成するコツがわかりました。いままで壁打ちをしまくって効率が悪いとよくわかりました。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "本業の効率化、個人ブログ発信用SEO"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "メール返信作業、誤字・脱字は必須です。"
      },
    ]
  },
  {
    id: 'review20',
    image: '/reviews/review20.png',
    qa: [
      {
        question: "感想",
        answer: "GPTsの裏を見れたり、GPTで4コマ漫画を作ってみたことがあるが、コツがわかったり、セキュリティについてあらためて考えることができた｡"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "毎日の活動や利用者の記録"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "利用者の記録から、個々の利用者の課題や支援内容を提案してもらい、検討し、立案する"
      },
    ]
  },
  {
    id: 'review19',
    image: '/reviews/review19.png',
    qa: [
      {
        question: "感想",
        answer: "プロンプトの重要性、組み込み方が理解できました。"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "提案資料作成・商材探し"
      },
    ]
  },
  {
    id: 'review18',
    image: '/reviews/review18.png',
    qa: [
      {
        question: "感想",
        answer: "AIの業務利用に対する解像度が上がった。さらに学習する機会になりました。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "業務改善（生産性・品質向上）"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "資料作成、組織戦略のアイデア発掘と精査、ナレッジ（体系化）"
      },
    ]
  },
  {
    id: 'review17',
    image: '/reviews/review17.png',
    qa: [
      {
        question: "感想",
        answer: "プロンプトが大事だと認識できた"
      },
    ]
  },
  {
    id: 'review16',
    image: '/reviews/review16.png',
    qa: [
      {
        question: "感想",
        answer: "盛りだくさんな内容。zoom配信も完璧。"
      },
    ]
  },
  {
    id: 'review15',
    image: '/reviews/review15.png',
    qa: [
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "ブログ作成活用"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "はい。ブログ作成用のプロンプトをまずは、精度を高めたいと思います。"
      },
    ]
  },
  {
    id: 'review14',
    image: '/reviews/review14.png',
    qa: [
      {
        question: "感想",
        answer: "分かりやすく、簡単にプロンプトの作成ができる"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "業務上、SEO記事作成について、AIライティングで作れるところ"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "SEO記事全般"
      },
    ]
  },
  {
    id: 'review13',
    image: '/reviews/review13.png',
    qa: [
      {
        question: "感想",
        answer: "プロンプトの作成について、あまりよくわかっていなかったので、具体例もあってとても学べました。"
      },
    ]
  },
  {
    id: 'review12',
    image: '/reviews/review12.png',
    qa: [
      {
        question: "感想",
        answer: "このようなChatGPTもあるのかと教えてもらった。漫画作成も身近であると感じた。実際の困りごとにリンクさせていきたい。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "コンサルティング業務"
      },
      {
        question: "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        answer: "業務効率化と顧客管理。音声データから議事録作成を要約し提案していく。そこにChatGPTを絡ませる。"
      },
    ]
  },
  {
    id: 'review11',
    image: '/reviews/review11.png',
    qa: [
      {
        question: "感想",
        answer: "AIにあまり触れていない自分でも、入り込みやすい内容だった。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "記帳作業部分で活用できそう。お客様への月次報告資料作成にも活用できそう。"
      },
    ]
  },
  {
    id: 'review10',
    image: '/reviews/review10.png',
    qa: [
      {
        question: "感想",
        answer: "プロンプトの作り方を復習することができた。"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "不動産の募集広告の作成や、ルームツアー動画の作成"
      },
    ]
  },
  {
    id: 'review9',
    image: '/reviews/review9.png',
    qa: [
      {
        question: "感想",
        answer: "ChatGPTの使い方がわかり世界が変わりました"
      },
      {
        question: "どのような業務でAIを活用したいですか？",
        answer: "営業、マーケティング、効率化"
      },
    ]
  },
  {
    id: 'review8',
    image: '/reviews/review8.png',
    qa: [
      {
        question: "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        answer: "マニュアル作成などについて活かせそうです"
      },
    ]
  },
  {
    id: 'review7',
    image: '/reviews/review7.png',
    qa: [
      {
        question: "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        answer: "問い合わせへの返信文や告知などの文面作成に活用できそう。以前の質問や対応ケースを記憶させて、同じようなケースの対応策を相談できるようにしたい"
      },
    ]
  },
  {
    id: 'review6',
    image: '/reviews/review6.png',
    qa: [
      {
        question: "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        answer: "メール作成や、領収書のデータ化作業をする際に時短になると思いました。"
      },
    ]
  },
  {
    id: 'review5',
    image: '/reviews/review5.png',
    qa: [
      {
        question: "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        answer: "動画データからの文字起こし→要約の部分がLINE配信などで役立ちそうだと思いました。"
      },
    ]
  },
  {
    id: 'review4',
    image: '/reviews/review4.png',
    qa: [
      {
        question: "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        answer: "リサーチや返答文の作成"
      },
    ]
  },
  {
    id: 'review3',
    image: '/reviews/review3.png',
    qa: [
      {
        question: "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        answer: "SEO記事の量産、メルマガ作成、ファクトチェック、情報収集など"
      },
    ]
  },
  {
    id: 'review2',
    image: '/reviews/review2.png',
    qa: [
      {
        question: "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        answer: "自身での文章の作成、他者が作成した文章の添削にかかる時間の削減"
      },
    ]
  },
  {
    id: 'review1',
    image: '/reviews/review1.png',
    qa: [
      {
        question: "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        answer: "自分で考える必要のある文章の作成や、クライアントに何かを説明する際の文章作成などでは、すぐに使えそうだなと思いました。\nあとは、エクセル・スプレッドシートの関数など、自分で検索してサイトを見つけ、どのサイトならわかりやすいか比較検討をして、そこから実際に使えるかどうか、ちゃんと動くかどうか、見様見真似で行う必要のあるものなどは、AIに聞くことにより、入力するだけで良い状態のものが、一発で出てくるのは、すごく便利だし使えそうだなと思いました。\nその他、動画編集や画像作成、スライドの作成などは、実際にどのくらいのクオリティでできるのか確認した後に、使えるかどうかの判断になるかと思います。"
      },
    ]
  },
];

export const ITEMS_PER_PAGE = 10;

export function getLatestReviewPage(): number {
  return Math.ceil(reviewsData.length / ITEMS_PER_PAGE);
}
