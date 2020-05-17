// immediate invoked function expression
(function () {
  const quotes = [
    {
      quote:
        "Whether you think you can or whether you think you can't, you're right!",
      author: "Henry Ford"
    },
    {
      quote:
        "Creativity comes from spontaneous meetings, from random discussions.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Don’t let the noise of others’ opinions drown out your own inner voice.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Get closer than ever to your customers. So close that you tell them what they need well before they realize it themselves.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Great things in business are never done by one person, they're done by a team of people.",
      author: "Steve Jobs"
    },
    {
      quote:
        "If you define the problem correctly, you almost have the solution.",
      author: "Steve Jobs"
    },
    {
      quote:
        "If you don't have a passion, you'll give up.",
      author: "Steve Jobs"
    },
    {
      quote:
        "It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do.",
      author: "Steve Jobs"
    },
    {
      quote:
        "It takes a lot of hard work to make something simple.",
      author: "Steve Jobs"
    },
    {
      quote:
        "It's technology married with liberal arts, married with the humanities, that yields us the results that make our heart sing.",
      author: "Steve Jobs"
    },
    {
      quote:
        "It's the disease of thinking that a having a great idea is really 90% of the work. And if you just tell people, 'here's this great idea,' then of course they can go off and make it happen. The problem with that is that there's a tremendous amount of craftsmanship between a having a great idea and having a great product.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Learn continually - there's always ‘one more thing’ to learn!",
      author: "Steve Jobs"
    },
    {
      quote:
        "My job is not to be easy on people. My job is to take these great people we have and to push them and make them even better.",
      author: "Steve Jobs"
    },
    {
      quote:
        "None of us are as creative as all of us.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Older people sit down and ask, 'What is it?' but the boy asks, 'What can I do with it?'",
      author: "Steve Jobs"
    },
    {
      quote:
        "People don't know what they want until you show it to them. That's why I never rely on marketing research. Our task is to read things that are not yet on the page.",
      author: "Steve Jobs"
    },
    {
      quote:
        "The real art is knowing what to leave out, not what to put in.",
      author: "Steve Jobs"
    },
    {
      quote:
        "To go forward you have to leave something behind.",
      author: "Steve Jobs"
    },
    {
      quote:
        "We have always been shameless about stealing great ideas.",
      author: "Steve Jobs"
    },
    {
      quote:
        "When you first start off trying to solve a problem, the first solutions you come up with are very complex, and most people stop there. But if you keep going, and live with the problem and peel more layers of the onion off, you can often times arrive at some very elegant and simple solutions.",
      author: "Steve Jobs"
    },
    {
      quote:
        "You know we're constantly taking. We don't make most of the food we eat, we don't grow it, anyway. We wear clothes other people make, we speak a language other people developed, we use a mathematics other people evolved and spent their lives building. I mean we're constantly taking things. It's a wonderful ecstatic feeling to create something and put it into the pool of human experience and knowledge.",
      author: "Steve Jobs"
    },
    {
      quote:
        "You should never go to a meeting or make a telephone call without a clear idea of what you are trying to achieve.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Your customers don't care about you. They don't care about your product or service. They care about themselves, their dreams, their goals. Now, they will care much more if you help them reach their goals, and to do that, you must understand their goals, as well as their needs and deepest desires.",
      author: "Steve Jobs"
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
      author: "Steve Jobs"
    },
    {
      quote:
        "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.",
      author: "Milton Glaser"
    },
    {
      quote:
        "If no one hates it, no one really loves it.",
      author: "Jessica Walsh"
    },
    {
      quote:
        "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.",
      author: "Paul Rand"
    },
    {
      quote:
        "To be a good artist / letterer / designer / guitar player, it takes practice. A lot of it. More than you can even fathom when you’re starting out.",
      author: "Jessica Hische"
    },
    {
      quote:
        "Good design is all about making other designers feel like idiots because that idea wasn’t theirs.",
      author: "Frank Chimero"
    },
    {
      quote:
        "Live in the leading--the spaces in between the rules.",
      author: "Stefan Mumaw"
    },
    {
      quote:
        "Have no fear of perfection—you’ll never reach it.",
      author: "Salvador Dali"
    },
    {
      quote:
        "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.",
      author: "Irene Au"
    },
    {
      quote:
        "The alternative to good design is always bad design. There is no such thing as no design.",
      author: "Adam Judge"
    },
    {
      quote:
        "It’s easier to ask forgiveness than it is to get permission.",
      author: "Grace Hopper"
    },
    {
      quote:
        "Creativity is a highfalutin word for the work I have to do between now and Tuesday.",
      author: "Ray Kroc"
    },
    {
      quote:
        "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci"
    },
    {
      quote:
        "Whitespace is like air: it is necessary for design to breathe.",
      author: "Wojciech Zieliński"
    },
    {
      quote:
        "I love deadlines. I like the whooshing sound they make as they fly by.",
      author: "Douglas Adams"
    },
    {
      quote:
        "For every complex problem, there is an answer that is clear, simple, and wrong.",
      author: "H. L. Mencken"
    },
    {
      quote:
        "To design is much more than simply to assemble, to order, or even to edit: it is to add value and meaning, to illuminate, to simplify, to clarify, to modify, to dignify, to dramatize, to persuade, and perhaps even to amuse. To design is to transform prose into poetry.",
      author: "Paul Rand"
    },
    {
      quote:
        "Good design is obvious. Great design is transparent.",
      author: "Joe Sparano"
    },
    {
      quote:
        "Do not seek praise. Seek criticism.",
      author: "Paul Arden"
    },
    {
      quote:
        "Styles come and go. Good design is a language, not a style.",
      author: "Massimo Vignelli"
    },
    {
      quote:
        "If you think good design is expensive, you should look at the cost of bad design.",
      author: "Ralf Speth"
    },
    {
      quote:
        "The work you do while you procrastinate is probably the work you should be doing for the rest of your life.",
      author: "Jessica Hische"
    },
    {
      quote:
        "Less is more work.",
      author: "Patric McCue"
    },
    {
      quote:
        "The best ideas come as jokes. Make your thinking as funny as possible.",
      author: "David Ogilvy"
    },
    {
      quote:
        "I have made this longer than usual because I have not had time to make it shorter.",
      author: "Blaise Pascal, Lettres Provinciales (1657)"
    },
    {
      quote:
        "Eighty percent of success is showing up.",
      author: "Woody Allen"
    },
    {
      quote:
        "I don't know what I'm doing, but my incompetence has never stopped my enthusiasm.",
      author: "Woody Allen"
    },
    {
      quote:
        "Confidence is what you have before you understand the problem.",
      author: "Woody Allen"
    },
    {
      quote:
        "Some drink deeply from the river of knowledge. Others only gargle.",
      author: "Woody Allen"
    },
    {
      quote:
        "The food here is terrible, and the portions are too small.",
      author: "Woody Allen"
    },
    {
      quote:
        "No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn't trying.",
      author: "Tony Robbins"
    },
    {
      quote:
        "Don't gain the world and lose your soul; wisdom is better than silver or gold.",
      author: "Bob Marley"
    },
    {
      quote:
        "Of course I'm ambitious. What's wrong with that? Otherwise you sleep all day.",
      author: "Ringo Starr"
    },
    {
      quote:
        "If you feel safe in the area you’re working in, you’re not working in the right area. Always go a little further into the water than you feel you’re capable of being in. Go a little bit out of your depth. And when you don’t feel that your feet are quite touching the bottom, you’re just about in the right place to do something exciting.",
      author: "David Bowie"
    },
    {
      quote:
        "Speak in extremes, it'll save you time.",
      author: "David Bowie"
    },
    {
      quote:
        "When you write a book, you spend day after day scanning and identifying the trees. When you’re done, you have to step back and look at the forest.",
      author: "Stephen King"
    },
    {
      quote:
        "If you re-read your work, you can find on re-reading a great deal of repetition can be avoided by re-reading and editing.",
      author: "William Safire"
    },
    {
      quote:
        "You can't revise a blank page.",
      author: "Leonard Wolf"
    },
    {
      quote:
        "A professional writer is an amateur who didn't quit.",
      author: "Richard Bach"
    },
    {
      quote:
        "I believe more in the scissors than I do in the pencil.",
      author: "Truman Capote"
    },
    {
      quote:
        "Never write an advertisement which you wouldn't want your family to read. You wouldn't tell lies to your own wife. Don't tell them to mine.",
      author: "David Ogilvy"
    },
    {
      quote:
        "On the average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar.",
      author: "David Ogilvy"
    },
    {
      quote:
        "I am one who believes that one of the greatest dangers of advertising is not that of misleading people, but that of boring them to death.",
      author: "Leo Burnett"
    },
    {
      quote:
        "We want consumers to say, 'That's a hell of a product' instead of, 'That's a hell of an ad.'",
      author: "Leo Burnett"
    },
    {
      quote:
        "Half the money I spend on advertising is wasted; the trouble is I don't know which half.",
      author: "John Wanamaker"
    },
    {
      quote:
        "Your most unhappy customers are your greatest source of learning.",
      author: "Bill Gates"
    },
    {
      quote:
        "Good marketers tell a story.",
      author: "Seth Godin"
    },
    {
      quote:
        "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
      author: "Stephen King"
    },
    {
      quote:
        "Don’t tell me how good you make it; tell me how good it makes me when I use it.",
      author: "Leo Burnett"
    },
    {
      quote:
        "Every sale has five basic obstacles: no need, no money, no hurry, no desire, no trust.",
      author: "Zig Ziglar"
    },
    {
      quote:
        "Creativity may well be the last legal unfair competitive advantage we can take to run over the competition.",
      author: "David Trott"
    },
    {
      quote:
        "Do not be embarrassed by your failures, learn from them and start again.",
      author: "Richard Branson"
    },
    {
      quote:
        "Successful people ask better questions, and as a result, they get better answers.",
      author: "Tony Robbins"
    },
    {
      quote:
        "If you can’t explain it to a 6-year old, you don’t know it yourself.",
      author: "Albert Einstein"
    },
    {
      quote:
        "Creativity is intelligence having fun.",
      author: "Albert Einstein"
    },
    {
      quote:
        "To think creatively, we must be able to look afresh at what we normally take for granted.",
      author: "George Kneller"
    },
    {
      quote:
        "An essential aspect of creativity is not being afraid to fail.",
      author: "Edwin Land"
    },
    {
      quote:
        "Good marketing makes the company look smart. Great marketing makes the customer feel smart.",
      author: "Joe Chernov"
    },
    {
      quote:
        "If you aim at nothing, you will hit it every time.",
      author: "Zig Ziglar"
    },
    {
      quote:
        "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
      author: "Jeff Bezos, CEO and founder of Amazon"
    },
    {
      quote:
        "our personal brand is what people say about you when you are not in the room – remember that. And more importantly, let’s discover why!",
      author: "Chris Ducker"
    },
    {
      quote:
        "Your brand is what other people say about you when you’re not in the room.",
      author: "Jeff Bezos, CEO and founder of Amazon"
    },
    {
      quote:
        "If you decide that you’re going to do only the things you know are going to work, you’re going to leave a lot of opportunity on the table.",
      author: "Jeff Bezos, CEO and founder of Amazon"
    },
    {
      quote:
        "Complaining is not a strategy. You have to work with the world as you find it, not as you would have it be.",
      author: "Jeff Bezos, CEO and founder of Amazon"
    },
    {
      quote:
        "In the end, we are our choices.",
      author: "Jeff Bezos, CEO and founder of Amazon"
    },
    {
      quote:
        "Design is thinking made visual.",
      author: "Saul Bass"
    },
    {
      quote:
        "I want to make beautiful things, even if nobody cares, as opposed to ugly things. That's my intent.",
      author: "Saul Bass"
    },
    {
      quote:
        "You know, whenever I was presented with a challenge that brought up feelings of fear or self-doubt, I almost always said, 'Yes'.",
      author: "Saul Bass"
    },
    {
      quote:
        "I want everything we do to be beautiful. I don't give a damn whether the client understands that that's worth anything, or that the client thinks it's worth anything, or whether it is worth anything. It's worth it to me. It's the way I want to live my life. I want to make beautiful things, even if nobody cares.",
      author: "Saul Bass"
    },
    {
      quote:
        "The ideal trademark is one that is pushed to its utmost limits in terms of abstraction and ambiguity, yet is still readable. Trademarks are usually metaphors of one kind or another. And are, in a certain sense, thinking made visible.",
      author: "Saul Bass"
    },
    {
      quote:
        "Have you ever thought that radical ideas threaten institutions, then become institutions, and in turn reject radical ideas which threaten institutions?",
      author: "Saul Bass"
    },
    {
      quote:
        "You see an artist, a creative person, can accept criticism or can live with the criticism much more easily than with being ignored. Criticism makes you feel alive. If somebody is bothered enough to speak vituperatively about it, you feel you have touched a nerve and you are at least 'in touch.' You are not happy that he doesn't like it, but you feel you are in contact with life.",
      author: "Saul Bass"
    },
    {
      quote:
        "You will learn most things by looking, but reading gives understanding. Reading will make you free.",
      author: "Paul Rand"
    },
    {
      quote:
        "If I was influenced by anything, it was architecture: structure having to do with logic. If you don't do it right, the whole thing is going to cave in. In a certain sense, you can carry that to graphic design. Fortunately, however, nobody is going to die if you do it wrong.",
      author: "Paul Rand"
    },
    {
      quote:
        "White space is to be regarded as an active element, not a passive background.",
      author: "Jan Tschichold"
    },
    {
      quote:
        "The whole point with type is for you not to be aware it is there. If you remember the shape of a spoon with which you just ate some soup, then the spoon had a poor shape.",
      author: "Adrian Frutiger"
    },
    {
      quote:
        "I'm obviously a typeomaniac, which is an incurable if not mortal disease. I can't explain it. I just love, I just like looking at type. I just get a total kick out of it: they are my friends. Other people look at bottles of wine or whatever, or, you know, girls' bottoms. I get kicks out of looking at type. It's a little worrying, I admit, but it's a very nerdish thing to do.",
      author: "Erik Spiekermann"
    },
    {
      quote:
        "It took me a few seconds to draw it, but it took me 34 years to learn how to draw it in a few seconds.",
      author: "Paula Scher"
    },
    {
      quote:
        "Words have meaning, type has spirit.",
      author: "Paula Scher"
    },
    {
      quote:
        "Having no purpose is the function of art, so somebody else can look at it and ask a question. Design is different - you're supposed to understand what's going on. You can be delighted by it, intrigued by it, but you're supposed to know it's a hot dog stand.",
      author: "Paula Scher"
    },
    {
      quote:
        "A designer without a sense of history is worth nothing.",
      author: "Massimo Vignelli"
    },
    {
      quote:
        "Having small touches of colour makes it more colourful than having the whole thing in colour.",
      author: "Dieter Rams"
    },
    {
      quote:
        "Question everything generally thought to be obvious.",
      author: "Dieter Rams"
    },
    {
      quote:
        "It's very easy to be different, but very difficult to be better.",
      author: "Jonathan Ive"
    },
    {
      quote:
        "There's no learning without trying lots of ideas and failing lots of times.",
      author: "Jonathan Ive"
    },
    {
      quote:
        "Simplification is one of the most difficult things to do.",
      author: "Jonathan Ive"
    },
    {
      quote:
        "The best ideas start as conversations.",
      author: "Jonathan Ive"
    },
    {
      quote:
        "Simplicity is not the absence of clutter.",
      author: "Jonathan Ive"
    },
    {
      quote:
        "I work through teams. It’s the only way I know how to work.",
      author: "Angela Ahrendts"
    },
    {
      quote:
        "My dad would always say, 'When you look at a photo do you see yourself last?'",
      author: "Angela Ahrendts"
    },
    {
      quote:
        "The easier it is to do something, the harder it is to change the way you do it.",
      author: "Steve Wozniak"
    },
    {
      quote:
        "If you can't be bothered to work on Saturday, don't bother to come in on Sunday.",
      author: "Jay Chiat"
    },
    {
      quote:
        "An ad should be an appetizer, not a buffet.",
      author: "Lee Clow"
    },
    {
      quote:
        "Creative people are 50% ego and 50% insecurity.",
      author: "Lee Clow"
    },
    {
      quote:
        "A thing that most creatives don't do well is that you've gotta learn to listen.",
      author: "Lee Clow"
    },
    {
      quote:
        "Ultimately, if you are doing great work, the money will come.",
      author: "Lee Clow"
    },
    {
      quote:
        "You can't just be you. You have to double yourself. You have to read books on subjects you know nothing about. You have to travel to places you never thought of traveling. You have to meet every kind of person and endlessly stretch what you know.",
      author: "Mary Wells Lawrence"
    },
    {
      quote:
        "The best advertising should make you nervous about what you're not buying.",
      author: "Mary Wells Lawrence"
    },
    {
      quote:
        "Do not let what you cannot do interfere with what you can do.",
      author: "John Wooden"
    },
    {
      quote:
        "Don't wait for your ship to come in, swim out to it.",
      author: "Cathy Hopkins"
    },
    {
      quote:
        "As I grow older, I pay less attention to what men say. I just watch what they do.",
      author: "Andrew Carnegie"
    },
    {
      quote:
        "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
      author: "Andre Gide"
    },
    {
      quote:
        "The wise man does at once what the fool does finally.",
      author: "Baltasar Gracian"
    },
    {
      quote:
        "The world has the habit of making room for the man whose actions show that he knows where he is going.",
      author: "Napoleon Hill"
    },
    {
      quote:
        "I hear and I forget, I see and I remember. I do and I understand.",
      author: "Chinese Proverb"
    },
    {
      quote:
        "If there is something to gain and nothing to lose by asking, by all means ask!",
      author: "W. Clement Stone"
    },
    {
      quote:
        "What happens is not as important as how you react to what happens.",
      author: "Thaddeus Golas"
    },
    {
      quote:
        "Listen to the mustn’ts, child. Listen to the don’ts. Listen to the shouldn’ts, the impossibles, the won’ts. Listen to the never haves, then listen close to me. Anything can happen, child. Anything can be.",
      author: "Shel Silverstein"
    },
    {
      quote:
        "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
      author: "Steve Jobs"
    },
    {
      quote:
        "I drifted into photography like one drifts into prostitution. First I did it to please myself, then I did it to please my friends, and eventually I did it for the money.",
      author: "Philippe Halsman"
    },
    {
      quote:
        "Stare. It's the way to educate your eyes. Pry, Listen, Eavesdrop. Die knowing something. You are not here long.",
      author: "Walker Evans"
    },
    {
      quote:
        "I am always doing that which I can not do, in order that I may learn how to do it.",
      author: "Pablo Picasso"
    },
    {
      quote:
        "Everybody walks past a thousand story ideas every day. The good writers are the ones who see five or six of them. Most people don't see any.",
      author: "Orson Scott Card"
    },
    {
      quote:
        "An art thief is a man who takes pictures.",
      author: "George Carlin"
    },
    {
      quote:
        "The hard part is what separates the good from great.",
      author: "Noah Kagan, AppSumo"
    },
    {
      quote:
        "You don't make a photograph just with a camera. You bring to the act of photography all the pictures you have seen, the books you have read, the music you have heard, the people you have loved.",
      author: "Ansel Adams"
    },
    {
      quote:
        "There are no bad pictures; that's just how your face looks sometimes.",
      author: "Abraham Lincoln"
    },
    {
      quote:
        "There is nothing worse than a sharp image of a fuzzy concept.",
      author: "Ansel Adams"
    },
    {
      quote:
        "A photograph is a moral decision taken in one eighth of a second.",
      author: "Salman Rushdie, The Ground Beneath Her Feet"
    },
    {
      quote:
        "Is a picture really worth a thousand words? What thousand words? A thousand words from a lunatic, or a thousand words from Nietzsche? Actually, Nietzsche was a lunatic, but you see my point. What about a thousand words from a rambler vs. 500 words from Mark Twain? He could say the same thing quicker and with more force than almost any other writer. One thousand words from Ginsberg are not even worth one from Wilde. It’s wild to declare the equivalency of any picture with any army of 1,000 words. Words from a writer like Wordsworth make you appreciate what words are worth.",
      author: "Jarod Kintz, This is the best book I've ever written, and it still sucks"
    },
    {
      quote:
        "A photographer is like a cod, which produces a million eggs in order that one may reach maturity.",
      author: "George Bernard Shaw"
    },
    {
      quote:
        "When people look at my pictures I want them to feel the way they do when they want to read a line of a poem twice.",
      author: "Robert Frank"
    },
    {
      quote:
        "You can look at a picture for a week and never think of it again. You can also look at a picture for a second and think of it all your life.",
      author: "Joan Miró"
    },
    {
      quote:
        "You put your camera around your neck in the morning along with putting on your shoes, and there it is, an appendage of the body that shares your life with you. The camera is an instrument that teaches people how to see without a camera.",
      author: "Dorothea Lange"
    },
    {
      quote:
        "Collect moments rather than things. Moments get away.",
      author: "Matthew Knisely, Framing Faith: From Camera to Pen, an Award-Winning Photojournalist Captures God in a Hurried World"
    },
    {
      quote:
        "If your photographs aren't good enough, you're not close enough.",
      author: "Robert Capa"
    },
    {
      quote:
        "The cliché comes not in what you shoot but in how you shoot it.",
      author: "David duChemin, Within the Frame: The Journey of Photographic Vision"
    },
    {
      quote:
        "There are three kinds of men. The one that learns by reading. The few who learn by observation. The rest of them have to pee on the electric fence for themselves.",
      author: "Will Rogers"
    },
    {
      quote:
        "A person who never made a mistake never tried anything new.",
      author: "Albert Einstein"
    },
    {
      quote:
        "Being honest may not get you a lot of friends but it’ll always get you the right ones.",
      author: "John Lennon"
    },
    {
      quote:
        "Everything will be okay in the end. If it's not okay, it's not the end.",
      author: "John Lennon"
    },
    {
      quote:
        "The establishment will irritate you - pull your beard, flick your face - to make you fight. Because once they've got you violent, then they know how to handle you. The only thing they don't know how to handle is non-violence and humor.",
      author: "John Lennon"
    },
    {
      quote:
        "True terror is to wake up one morning and discover that your high school class is running the country.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "Practice any art, music, singing, dancing, acting, drawing, painting, sculpting, poetry, fiction, essays, reportage, no matter how well or badly, not to get money and fame, but to experience becoming, to find out what's inside you, to make your soul grow.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "It's a terrible waste to be happy and not notice it.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "We are what we pretend to be, so we must be careful what we pretend to be.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "I want to stand as close to the edge as I can without going over. Out on the edge you see all the kinds of things you can't see from the center.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "Nobody will stop you from creating. Do it tonight. Do it tomorrow. That is the way to make your soul grow.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "Hello, babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. At the outside, babies, you've got about a hundred years here. There's only one rule that I know of, babies - God damn it, you've got to be kind.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "The arts are not a way to make a living. They are a very human way of making life more bearable.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "And I urge you to please notice when you are happy, and exclaim or murmur or think at some point, 'If this isn't nice, I don't know what is.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "You don't do art for any other reason than to help your soul grow.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "Sing in the shower. Dance to the radio. Tell stories. Write a poem to a friend, even a lousy poem. Do it as well as you possibly can. You will get an enormous reward. You will have created something.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "Find a subject you care about and which you in your heart feel others should care about. It is this genuine caring, and not your games with language, which will be the most compelling and seductive element in your style.",
      author: "Kurt Vonnegut"
    },
    {
      quote:
        "You should never hesitate to trade your cow for a handful of magic beans.",
      author: "Tom Robbins"
    },
    {
      quote:
        "You risked your life, but what else have you ever risked? Have you risked disapproval? Have you ever risked economic security? Have you ever risked a belief? I see nothing particularly courageous about risking one's life. So you lose it, you go to your hero's heaven and everything is milk and honey 'til the end of time. Right? You get your reward and suffer no earthly consequences. That's not courage. Real courage is risking something that might force you to rethink your thoughts and suffer change and stretch consciousness. Real courage is risking one's clichés.",
      author: "Tom Robbins"
    },
    {
      quote:
        "Don't be outraged, be outrageous.",
      author: "Tom Robbins"
    },
    {
      quote:
        "Here's an idea: let's get over ourselves, buy a cherry pie, and go fall in love with life.",
      author: "Tom Robbins"
    },
    {
      quote:
        "Never underestimate how much assistance, how much satisfaction, how much comfort, how much soul and transcendence there might be in a well-made taco and a cold bottle of beer.",
      author: "Tom Robbins"
    },
    {
      quote:
        "To live fully, one must be free, but to be free one must give up security. Therefore, to live one must be ready to die. How's that for a paradox?",
      author: "Tom Robbins"
    },
    {
      quote:
        "How can you admire a human who consciously embraces the bland, the mediocre, and the safe rather than risk the suffering that disappointment can bring?",
      author: "Tom Robbins"
    },
    {
      quote:
        "The beauty of simplicity is the complexity it attracts.",
      author: "Tom Robbins"
    },
    {
      quote:
        "Of the Seven Dwarfs, the only one who shaved was Dopey. That should tell us something about the wisdom of shaving.",
      author: "Tom Robbins"
    },
    {
      quote:
        "The mission of the artist in an over-technologized society, is to call the old magic back to life.",
      author: "Tom Robbins"
    },
    {
      quote:
        "Unhappiness is the ultimate form of self-indulgence.",
      author: "Tom Robbins"
    },
    {
      quote:
        "All a person can do in this life is gather about him his integrity, his imagination, and his individuality – and with these ever with him, out front and in sharp focus, leap into the dance of experience.",
      author: "Tom Robbins"
    },
    {
      quote:
        "We are seldom as limited as we think we are.",
      author: "Tom Robbins"
    },
    {
      quote:
        "Always compare yourself to the best. Even if you never measure up, it can't help but make you better.",
      author: "Tom Robbins"
    },
    {
      quote:
        "You can feel good about failure. Failure means you did something. You finished the story even if it wasn't what you'd hoped. Failure means you're learning. Growing. Doing.",
      author: "Chuck Wendig"
    },
    {
      quote:
        "Read your work out loud. Don't give me that look. Read your work aloud. Don't argue. Don't fight. It will help. I promise. I promise. I guarantee it. If you find it didn't help you, lemme know. I will let you Taser me in the face. And by 'me,' I mean, some other guy who will be my stand-in. Probably some real estate agent or tollbooth attendant.",
      author: "Chuck Wendig"
    },
    {
      quote:
        "Here are the two states in which you may exist: person who writes, or person who does not. If you write: you are a writer. If you do not write: you are not. Aspiring is a meaningless null state that romanticizes Not Writing. It’s as ludicrous as saying, 'I aspire to pick up that piece of paper that fell on the floor.' Either pick it up or don’t. I don’t want to hear about how your diaper’s full. Take it off or stop talking about it.",
      author: "Chuck Wendig"
    },
    {
      quote:
        "Write as much as you can. As fast as you can. Finish your shit. Hit your deadlines. Try very hard not to suck.",
      author: "Chuck Wendig"
    },
    {
      quote:
        "Writers are made--forged, really, in a kiln of their own madness and insecurities--over the course of many, many moons. The writer you are when you begin is not the same as the writer you become.",
      author: "Chuck Wendig, 250 Things You Should Know About Writing"
    },
    {
      quote:
        "If you want to find the way forward, then stop looking for maps and start walking.",
      author: "Chuck Wendig"
    },
    {
      quote:
        "Stories have the power to make people feel. To give a shit. To change their opinions. To change the world.",
      author: "Chuck Wendig, 250 Things You Should Know About Writing"
    },
    {
      quote:
        "Repeat the mantra: Writing is when I make the words. Editing is when I make them not shitty.",
      author: "Chuck Wendig, 500 Ways to Be a Better Writer"
    },
    {
      quote:
        "The best gift you can give somebody is a surprise because they never forget.",
      author: "Chuck Wendig, Wanderers"
    },
    {
      quote:
        "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
      author: "Paul Rand"
    },
    {
      quote:
        "If you can design one thing, you can design everything.",
      author: "Massimo Vignelli"
    },
    {
      quote:
        "The ultimate inspiration is the deadline.",
      author: "Nolan Bushnell"
    },
    {
      quote:
        "Graphic design is a visual language uniting harmony and balance, color and light, scale and tension, form and content. But it is also an idiomatic language, a language of cues and puns and symbols and allusions, of cultural references and perceptual inferences that challenge both the intellect and the eye.",
      author: "Jessica Helfand"
    },
    {
      quote:
        "Good design encourages a viewer to want to learn more.",
      author: "Alexander Isley"
    },
    {
      quote:
        "Graphic designers should be literate in graphic design history. Being able to design well is not always enough. Knowing the roots of design is necessary to avoid reinvention, no less inadvertent plagiarism.",
      author: "Steven Heller"
    },
    {
      quote:
        "Design is a response to a specific problem. You are given a problem to solve, and then you let the problem itself tell you what your solution is.",
      author: "Chip Kidd"
    },
    {
      quote:
        "What's the use of being legible, when nothing inspires you to take notice of it?",
      author: "Wolfgang Weingart"
    },
    {
      quote:
        "Things that make you weird as a kid will make you great tomorrow.",
      author: "James Victore"
    },
    {
      quote:
        "Good design is a lot like clear thinking made visual.",
      author: "Edward Tufte"
    },
    {
      quote:
        "You can do a good ad without good typography, but you can't do a great ad without good typography.",
      author: "Herb Lubalin"
    },
    {
      quote:
        "Graphic design was largely about communication in an artistic or creative manner, much like writing is used to convey ideas. Many designers completely miss that aspect of the 'art.' Some are completely satisfied with just making things pretty, without taking the communication element into consideration.",
      author: "Jeff Fisher"
    },
    {
      quote:
        "Design is thinking made visual.",
      author: "Saul Bass"
    },
    {
      quote:
        "Simplicity, carried to an an extreme, becomes elegance.",
      author: "Jon Franklin"
    },
    {
      quote:
        "If design isn't profitable, then it's art.",
      author: "Henrik Fisker"
    },
    {
      quote:
        "It's through mistakes that you actually can grow. You have to get bad in order to get good.",
      author: "Paula Scher"
    },
    {
      quote:
        "Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination   Authenticity is invaluable; originality is non-existent. And don’t bother concealing your thievery - celebrate it if you feel like it.",
      author: "Jim Jarmusch"
    },
    {
      quote:
        "You cannot not communicate.",
      author: "Paul Watzlawick"
    },
    {
      quote:
        "When I studied graphic design, I learned a valuable lesson: There's no perfect answer to the puzzle, and creativity is a renewable resource.",
      author: "Biz Stone"
    },
    {
      quote:
        "Do work you love and are passionate about, look outside of the world of graphic design for inspiration.",
      author: "Jessica Walsh"
    },
    {
      quote:
        "Kiddies, Graphic Design, if you wield it effectively, is Power. Power to transmit ideas that change everything. Power that can destroy an entire race or save a nation from despair. In this century, Germany chose to do the former with the swastika, and America opted for the latter with Mickey Mouse and Superman.",
      author: "Chip Kidd"
    },
    {
      quote:
        "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.",
      author: "Steve Jobs"
    },
    {
      quote:
        "The life of a designer is a life of fight: fight against the ugliness.",
      author: "Massimo Vignelli"
    },
    {
      quote:
        "Color does not add a pleasant quality to design - it reinforces it.",
      author: "Pierre Bonnard"
    },
    {
      quote:
        "Art has to move you and design does not, unless it's a good design for a bus.",
      author: "David Hockney"
    },
    {
      quote:
        "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
      author: "Antoine de Saint-Exupery"
    },
    {
      quote:
        "The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design.",
      author: "Massimo Vignelli"
    },
    {
      quote:
        "Content precedes design. Design in the absence of content is not design, it's decoration.",
      author: "Jeffrey Zeldman"
    },
    {
      quote:
        "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
      author: "Douglas Adams"
    },
    {
      quote:
        "You can have an art experience in front of a Rembrandt...or in front of a piece of graphic design.",
      author: "Stefan Sagmeister"
    },
    {
      quote:
        "Good design is thorough down to the last detail - Nothing must be arbitrary or left to chance. Care and accuracy in the design process show respect towards the consumer.",
      author: "Dieter Rams"
    },
    {
      quote:
        "User-centered design means understanding what your users need, how they think, and how they behave - and incorporating that understanding into every aspect of your process.",
      author: "Jesse James Garrett"
    },
    {
      quote:
        "People like the illusion of choice. Gives them comfort in these strange times.",
      author: "Chuck Wendig, Aftermath"
    },
    {
      quote:
        "No amount of evidence will ever persuade an idiot.",
      author: "Mark Twain"
    },
    {
      quote:
        "I was educated once - it took me years to get over it.",
      author: "Mark Twain"
    },
    {
      quote:
        "Continuous improvement is better than delayed perfection.",
      author: "Mark Twain"
    },
    {
      quote:
        "Never miss an opportunity to shut up.",
      author: "Mark Twain"
    },
    {
      quote:
        "Those who do not read have no advantage over those who cannot read.",
      author: "Mark Twain"
    },
    {
      quote:
        "Few things are more irritating than when someone who is wrong is also very effective in making his point.",
      author: "Mark Twain"
    },
    {
      quote:
        "I do love compliments, yet I'm often embarrassed to say what I think to the person when I get a compliment. I so often feel that they have not gone far enough.",
      author: "Mark Twain"
    },
    {
      quote:
        "There are a million people who can come up with little bits. The hard work is making those bits into something.",
      author: "Jeff Lynne"
    },
    {
      quote:
        "It's being here now that's important. There's no past and there's no future. Time is a very misleading thing. All there is ever, is the now. We can gain experience from the past, but we can't relive it; and we can hope for the future, but we don't know if there is one.",
      author: "George Harrison"
    },

    {
      quote:
        "Most men lead lives of quiet desperation and go to the grave with their song still in them.",
      author: "Henry David Thoreau"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars"
    },
    {
      quote:
        "The price of anything is the amount of life you exchange for it.",
      author: "Henry David Thoreau"
    },
    {
      quote:
        "Bullshit is work that is done merely to complete requirements, make you look good, or otherwise fill up the hours of the day.",
      author: "Chris Guillebeau, The Art of Non-Conformity"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: "Tyne Daly"
    },
    {
      quote:
        "You don’t have to live your life the way other people expect you to.",
      author: "Chris Guillebeau, The Art of Non-Conformity"
    },
    {
      quote:
        "I don’t understand why people are frightened of new ideas. I’m frightened of the old ones.",
      author: "John Cage"
    },
    {
      quote:
        "The great pleasure in life is doing what people say you cannot do.",
      author: "Walter Bagehot"
    }

  ]

  const btn = document.getElementById("generate-btn")

  btn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * quotes.length)
    console.log(random)

    document.getElementById("quote").textContent = quotes[random].quote
    document.querySelector(".author").textContent = quotes[random].author
  })
})()
