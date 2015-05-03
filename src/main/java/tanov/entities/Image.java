package tanov.entities;

import java.io.Serializable;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import org.eclipse.persistence.annotations.UuidGenerator;

/**
 * The persistent class for the images database table.
 * 
 */
@UuidGenerator(name="UUID")
@XmlRootElement
@Entity
@Table(name="images")
@NamedQuery(name="Image.findAll", query="SELECT i FROM Image i")
public class Image implements Serializable {
	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator="UUID")
	private String id;
    @Lob
	private String content;
    @Lob
	private String hashtag;
	@Lob
	private String map;
	@Lob
	private String title;

	public Image() {
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getHashtag() {
		return this.hashtag;
	}

	public void setHashtag(String hashtag) {
		this.hashtag = hashtag;
	}

	public String getMap() {
		return this.map;
	}

	public void setMap(String map) {
		this.map = map;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}