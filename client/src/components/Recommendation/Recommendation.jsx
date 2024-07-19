import React, { useState } from 'react';
import OpenAI from "openai";
import './Recommendation.css'

const openai = new OpenAI({
    apiKey: 'myapikey',
    dangerouslyAllowBrowser: true
});


function Recommendation({ userProblems }) { 
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateRecommendations = async () => {
        setLoading(true);
        setError(null);

        try {
            

            const response = await openai.createChatCompletion({
                model: "gpt-4",
                messages: [
                    { role: "system", content: "You are an expert programmer who gives problem recommendations based on user's solved problems." },
                    { role: "user",
                        content: `Here are the problems the user has solved or struggled with: ${JSON.stringify(userProblems)}. Please recommend similar problems, youtube videos or concepts they should focus on based on problem tags.`,}
                ],
            });
            console.log(response)

            setRecommendations(response.data.choices[0].message.content.split('\n').filter(Boolean));

        } catch (err) {
            setError("Failed to generate recommendations. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='rec-container'>
            <button onClick={generateRecommendations} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Recommendations'}
            </button>
            {error && <div className="error">{error}</div>}
            {recommendations.length > 0 && (
                <div className="recommendations">
                    <h3>Recommended Problems:</h3>
                    <ul>
                        {recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Recommendation;
